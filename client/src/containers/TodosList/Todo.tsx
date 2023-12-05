import React from "react";

/** Styles */
import * as El from "./Todo.styles";

/** Components */
import Button from "~/components/Atoms/Button";

/** Hooks */
import { Todo as TodoBaseProps } from "hooks/useCreateTodo";
import useDeleteTodo from "hooks/useDeleteTodo";

type TodoProps = TodoBaseProps & {
  _id: string;
};


const Todo = ({ text, completed, _id }: TodoProps) => {
  const { deleteTodo } = useDeleteTodo();
  const handleDeletion = async () => {
    const { error } = await deleteTodo(_id);

    if (!error) {
      const event = new Event("createdTodo");
      document.dispatchEvent(event);
    }
  };

  const handleCompletion = () => {
    console.log(`Integrate completion for ${_id}`);
  };

  return (
    <El.Container>
      <El.Text>{text}</El.Text>
      <El.Actions>
        <Button color="danger" onClick={handleDeletion}>
          Excluir
        </Button>
      </El.Actions>
    </El.Container>
  );
};

export default Todo;
