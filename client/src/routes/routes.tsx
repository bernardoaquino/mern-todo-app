import { Route } from "react-router"

/** Components */
import ProtectedRoute from './ProtectedRoute'

/** Pages */
import HomePage from 'pages/Home'
import LoginPage from 'pages/Login'

export const browserRouterRoutes = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <HomePage />
                {/* <TodoPage /> */}
            </ProtectedRoute>
        )
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]

const routes = browserRouterRoutes.map(({ path, element }) => <Route path={path} element={element} />)

export default routes