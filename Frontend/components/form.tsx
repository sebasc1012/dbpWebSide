"use client";

import { ChangeEvent, useState } from "react";

interface ValueInput {
  name: string;
  email: string;
  number: number;
  choose: string;
  select: boolean;
}

interface ErrorState {
  name: string;
  email: string;
}

export function Form() {
  const [valueInput, setValueInput] = useState<ValueInput>({
    name: "",
    email: "",
    number: 0,
    choose: "",
    select: false,
  });
  const [error, setError] = useState<ErrorState>({
    name: "",
    email: "",
  });
  const handleInput = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValueInput((prev) => ({
      ...prev,
      [name]: name === "number" ? Number(value) : value,
    }));

    if (error[name as keyof ErrorState]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setValueInput((prev) => ({ ...prev, [name]: checked }));
  };

  const validationError = () => {
    const newError: ErrorState = {
      name: "",
      email: "",
    };
    if (!valueInput.name.trim()) {
      newError.name = "Name is requiered";
    }
    if (!valueInput.email.trim()) {
      newError.email = "email is requiered";
    }

    return newError;
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    console.log("datos formulario", valueInput);
    const errors = validationError();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={valueInput.name}
          onChange={handleInput}
          id="name"
          type="text"
        />
        {error.name && <p className="text-red">{error.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={valueInput.email}
          onChange={handleInput}
          id="email"
          type="email"
        />
        {error.email && <p>{error.email}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          name="number"
          value={valueInput.number}
          onChange={handleInput}
          id="phone"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="choose">Choose</label>
        <select
          name="choose"
          value={valueInput.choose}
          onChange={handleInput}
          id="choose"
        >
          <option value="">Select ONE</option>
          <option value="one">One</option>
          <option value="two">two</option>
          <option value="tree">tree</option>
        </select>
      </div>
      <div>
        <label htmlFor="select">According with this</label>
        <input
          name="select"
          checked={valueInput.select}
          onChange={handleCheckBox}
          id="select"
          type="checkbox"
        ></input>
      </div>
      <button>Click me</button>
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Estado actual del formulario:
        </h3>
        <pre className="text-xs text-gray-600 overflow-x-auto whitespace-pre-wrap">
          {JSON.stringify(valueInput, null, 2)}
        </pre>
      </div>
    </form>
  );
}
