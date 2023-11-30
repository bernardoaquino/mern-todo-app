import React, { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import { redirect } from "react-router-dom";

/** Constants */
import { SIGNIN_URL } from "~/constants";

/** Types */
import KeyValuePair from 'types/KeyValuePair';

type AuthProviderProps = {
    children: JSX.Element;
};

type SessionContext = {
    signOut: () => void;
    session: Session;
    updateSession: (session: Session) => void;
}

export type AuthWallProps = {
    children: JSX.Element | JSX.Element[];
};

type Session = {
    token: string;
    authHeaders?: KeyValuePair<string>;
};

const DEFAULT_SESSION: Session = {
    token: '',
    authHeaders: {
        'Content-Type': 'application/json',
    },
};

const getDefaultSession = () => {
    const localStorageSession = localStorage.getItem('session');

    if (localStorageSession) {
        return JSON.parse(localStorageSession);
    }

    return DEFAULT_SESSION;
}

const AuthContext = createContext<SessionContext>({
    signOut: () => {},
    session: DEFAULT_SESSION,
    updateSession: (updatedSession: Session) => {
        const headersToAppend: KeyValuePair<string> = updatedSession?.token ? {
            'Authorization': `Bearer ${updatedSession.token}`
        } : {};

        return ({ 
            ...DEFAULT_SESSION, 
            ...updatedSession, 
            authHeaders: {
                ...DEFAULT_SESSION.authHeaders,
                ...headersToAppend
            }
        })
    },
});

export const useSession = () => useContext(AuthContext);

export const AuthProvider = ({
    children
}: AuthProviderProps) => {
    const [session, setSession] = useState<Session>(getDefaultSession());

    const updateSession = (session: Session) => setSession((prevSession?: Session) => {
        const headersToAppend: KeyValuePair<string> = session?.token ? {
            'Authorization': 'Bearer ' + session.token
        } : {};

        localStorage.removeItem('session');

        const newSession: Session = {
            ...prevSession,
            ...session,
            authHeaders: {
                ...prevSession?.authHeaders,
                ...headersToAppend,
                ...DEFAULT_SESSION.authHeaders
            }
        };

        localStorage.setItem('session', JSON.stringify(newSession));

        return newSession;
    })

    const signOut = () => {
        localStorage.removeItem('session');

        setSession({
            ...getDefaultSession(),
            loaded: true
        });
    }

    return (
        <AuthContext.Provider value={{ session, updateSession, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthWall = ({ 
    children
}: AuthWallProps): ReactElement => {
    const { session } = useSession();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!session.token) {
                redirect(SIGNIN_URL);
            }
        }

    }, [session]);

    return <>{children}</>;
}