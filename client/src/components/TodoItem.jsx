/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useEffect, useContext } from "react";
import { useQueryClient, useMutation, QueryClient } from "react-query";
import deleteTodoRequest from "../api/deleteTodoRequest";
import updateTodoRequest from "../api/updateTodoRequest";
import { debounce } from "lodash";
import { TokenContext } from "../App";

export const TodoItem = ({ todo }) => {
  const [text, setText] = useState(todo.text);
  const [token] = useContext(TokenContext);

  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => deleteTodoRequest(updatedTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const debouncedUpdateTodo = useCallback(debounce(updateTodo, 600), [
    updateTodo,
  ]);

  useEffect(() => {
    if (text !== todo.text) {
      debouncedUpdateTodo({
        ...todo,
        text,
      });
    }
  }, [debouncedUpdateTodo, text, todo]);

  return (
    <div
      style={{
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        checked={todo.completed}
        type="checkbox"
        style={{
          marginRight: "5px",
          height: "34px",
          width: "34px",
        }}
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />

      <input
        style={{
          fontFamily: "'Roboto', sans-serif",
          color: "#333",
          fontSize: "1.2rem",
          padding: "0.5rem 2rem",
          borderRadius: "0.2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          display: "block",
          borderBottom: "0.3rem solid transparent",
          transition: "all 0.3s",
          marginRight: "8px",
        }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        style={{
          appearance: "button",
          backfaceVisibility: "hidden",
          backgroundColor: "#f00",
          borderRadius: "6px",
          borderWidth: "0",
          boxShadow:
            "rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0",
          boxSizing: "border-box",
          color: "#000",
          cursor: "pointer",
          fontFamily:
            '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
          fontSize: "100%",
          height: "44px",
          lineHeight: "1.15",
          outline: "none",
          overflow: "hidden",
          padding: "0 25px",
          position: "relative",
          textAlign: "center",
          textTransform: "none",
          transform: "translateZ(0)",
          transition: "all .2s,box-shadow .08s ease-in",
          userSelect: "none",
          WebkitUserSelect: "none",
          touchAction: "manipulation",
        }}
        onClick={() => deleteTodo(todo)}
      >
        delete
      </button>
    </div>
  );
};
