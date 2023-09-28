import React from 'react';

/** Assets */
import Check from 'assets/check.svg?react';
import Trash from 'assets/trash.svg?react';

/** Styles */
import * as El from './Todo.styles';

/** Types */
import { Todo as TodoProps } from 'hooks/useCreateTodo';
import Button from '~/components/Atoms/Button';

const Todo = ({ text, completed }: TodoProps) => {
    return (
        <El.Container>
            <El.Text>{text}</El.Text>
            <El.Actions>
                {!completed && <Button icon={Check} />}
                <Button color='danger' icon={Trash} />
            </El.Actions>
        </El.Container>
    );  
}

export default Todo;
