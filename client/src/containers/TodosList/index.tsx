import React, { useEffect } from 'react';

/** Components */
import List from '~/components/Atoms/List';
import Todo from './Todo';

/** Hooks */
import useTodos from 'hooks/useTodos';

const TodosList = () => {
    const { todos, refetch } = useTodos()

    useEffect(() => {
        document.addEventListener('createdTodo', () => refetch())

        return () => document.removeEventListener('createdTodo', () => refetch())
    }, [])

    return (
        <List items={todos} render={(item) => <Todo {...item} />} keyPrefix='todo' />
    );
}

export default TodosList;