"use client";

import { ChangeEvent, useReducer, useState } from "react";

interface initialState {
  message: string;
  id: string;
  status: boolean;
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_WORD":
      return [
        ...state,
        {
          message: action.message,
          id: crypto.randomUUID(),
          status: false,
        },
      ];
    case "DELETE":
      return state.map((info) => {
        if (info.id === action.id) {
          return { ...info, status: !info.status };
        }
        return info;
      });
  }
}

export function AddCard() {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "ADD_WORD", message: inputValue });
    setInputValue("");
  };

  return (
    <>
      <div className="bg-white h-[200px]">
        <form onSubmit={handleOnSubmit} className="flex flex-col">
          <label className="text-red-400">Testing</label>
          <input
            className="border-[2px] text-black"
            value={inputValue}
            onChange={handleInput}
          />
        </form>
        <ol>
          {state?.map(({ message, id, status }) => (
            <li key={id}>
              <input
                type="checkbox"
                checked={status}
                onChange={() => {
                  dispatch({
                    type: "DELETE",
                    id,
                  });
                }}
              />
              <label>{message}</label>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
