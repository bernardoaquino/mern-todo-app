import React, { useState } from "react";

/** Components */
import Button from "atoms/Button";
import Modal from "molecules/Modal";
import Form from "molecules/Form";

/** Hooks */
import useCreateTodo, { Todo } from "hooks/useCreateTodo";

/** Styles */
import * as El from "./CreateTodo.styles";

/** Types */
import { Field } from "hooks/useForm";

const CreateTodo = () => {
  const { createTodo } = useCreateTodo();
  const [open, setOpen] = useState(false);

  const createTodoFormFields: Field[] = [
    {
      label: "Título",
      name: "text",
      type: "text",
      required: true,
    },
  ];

  const openModal = () => {
    setOpen(true);
  };

  const handleCreateTodo = async (values: Todo) => {
    const { error } = await createTodo(values);

    if (!error) {
      setOpen(false);

      const event = new Event("createdTodo");
      document.dispatchEvent(event);
    }
  };

  return (
    <El.Container>
      <Button color="secondary" onClick={openModal}>
        criar todo
      </Button>
      <Modal
        title="Criar novo Todo"
        open={open}
        onClose={() => setOpen(false)}
        content={
          <Form
            fields={createTodoFormFields}
            submitLabel="salvar"
            onSubmit={handleCreateTodo}
          />
        }
      />
    </El.Container>
  );
};

export default CreateTodo;
