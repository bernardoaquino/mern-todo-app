import React from 'react';

/** Components */
import List from '~/components/Atoms/List';

/** Hooks */
import useTodos from 'hooks/useTodos';

const TodosList = () => {
    const { todos } = useTodos()

    return (
        <List items={todos} render={() => <p>teste</p>} keyPrefix='todo' />
    );
}

export default TodosList;