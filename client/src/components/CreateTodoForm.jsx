/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import createTodoRequest from "../api/createTodoRequest";
import { TokenContext } from "../App";

export const CreateTodoForm = () => {
  const [text, setText] = useState("");
  const [token] = useContext(TokenContext);

  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTodo({
          text,
        });
        setText("");
      }}
    >
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        style={{
          padding: "8px",
          marginRight: "6px",
        }}
      />
      <button
        style={{
          appearance: "button",
          backfaceVisibility: "hidden",
          backgroundColor: "#00c348",
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
          margin: "12px 0 0",
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
      >
        Create
      </button>
    </form>
  );
};
