import React from "react";

/** Assets */
// import Check from "assets/check.svg";
// import Trash from "../../assets/trash.svg";

/** Styles */
import * as El from "./Todo.styles";

/** Types */
import { Todo as TodoBaseProps } from "hooks/useCreateTodo";
import Button from "~/components/Atoms/Button";

type TodoProps = TodoBaseProps & {
  _id: string;
};

import useDeleteTodo from "hooks/useDeleteTodo";
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
