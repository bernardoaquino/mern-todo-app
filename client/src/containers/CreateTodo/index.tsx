import React, { useState } from 'react';

/** Components */
import Button from 'atoms/Button';
import Modal from 'molecules/Modal';
import Form from 'molecules/Form';

/** Styles */
import * as El from './CreateTodo.styles';

/** Types */
import { Field, Form as FormValues } from 'hooks/useForm';

const CreateTodo = () => {
    const [open, setOpen] = useState(false);
    const createTodoFormFields: Field[] = [
        {
            label: 'Título',
            name: 'text',
            type: 'text',
            required: true
        }
    ];

    const openModal = () => {
        setOpen(true);
    }

    const handleCreateTodo = (values: FormValues) => {
        console.log(values);
    }

    return (
        <El.Container>
            <Button onClick={openModal}>criar todo</Button>
            <Modal 
                title='Criar novo Todo'
                open={open}
                onClose={() => setOpen(false)}
                content={(
                    <Form 
                        fields={createTodoFormFields}
                        submitLabel='salvar'
                        onSubmit={handleCreateTodo}
                    />
                )}
            />
        </El.Container>
    );
}

export default CreateTodo;
