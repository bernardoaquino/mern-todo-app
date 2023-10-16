import React from 'react';

/** Assets */
import Check from 'assets/check.svg?react';
import Trash from 'assets/trash.svg?react';

/** Styles */
import * as El from './Todo.styles';

/** Types */
import { Todo as TodoBaseProps } from 'hooks/useCreateTodo';
import Button from '~/components/Atoms/Button';

type TodoProps = TodoBaseProps & {
    _id: string;
}

const Todo = ({ text, completed, _id }: TodoProps) => {
    const handleDeletion = () => {
        console.log(`Integrate delete for ${_id}`)
    }
    
    const handleCompletion = () => {
        console.log(`Integrate completion for ${_id}`)
    }

    return (
        <El.Container>
            <El.Text>{text}</El.Text>
            <El.Actions>
                {!completed && <Button icon={Check} onClick={handleCompletion} />}
                <Button color='danger' icon={Trash} onClick={handleDeletion} />
            </El.Actions>
        </El.Container>
    );  
}

export default Todo;
