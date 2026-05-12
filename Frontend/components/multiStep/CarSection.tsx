import { ChangeEvent, useReducer, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  amount: number;
}

enum ActionProduct {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ADD_AMOUNT,
  RED_AMOUNT,
}

type ActionProductType =
  | { type: ActionProduct.ADD_PRODUCT; payload: Product }
  | { type: ActionProduct.DELETE_PRODUCT; payload: { id: number } }
  | { type: ActionProduct.ADD_AMOUNT; payload: { id: number } }
  | { type: ActionProduct.RED_AMOUNT; payload: { id: number } };

function reducer(state: Product[], action: ActionProductType) {
  switch (action.type) {
    case ActionProduct.ADD_PRODUCT: {
      return [action.payload, ...state];
    }
    case ActionProduct.DELETE_PRODUCT: {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case ActionProduct.ADD_AMOUNT: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    }
    case ActionProduct.RED_AMOUNT: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    }
    default:
      return state;
  }
}

export function CardSection() {
  const initialData: Omit<Product, "id"> = {
    name: "",
    description: "",
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, []);
  const [initialForm, setInitialForm] =
    useState<Omit<Product, "id">>(initialData);

  const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInitialForm((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handlerForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!initialForm.description.trim() || !initialForm.name.trim()) return;

    const newProduct: Product = {
      id: Date.now(),
      description: initialData.description,
      name: initialData.name,
      amount: initialData.amount || 0,
    };

    dispatch({ type: ActionProduct.ADD_PRODUCT, payload: newProduct });
    setInitialForm(initialData);
  };

  function reduce (arr: boolean[]) {
    arr.reduce((initial, element)=> initial ?  !element : element, false)
  }
  return (
    <>
      <section>
        <form onSubmit={handlerForm}>
          <div>
            <label>Description</label>
            <input
              value={initialForm.description}
              name="description"
              onChange={handleChangeEvent}
              type="text"
            />
          </div>
          <div>
            <label>Name</label>
            <input
              value={initialForm.name}
              type="text"
              name="name"
              onChange={handleChangeEvent}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              value={initialForm.amount}
              type="number"
              name="amount"
              onChange={handleChangeEvent}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {state.map(({ amount, description, id, name }) => (
          <ul key={id}>
            <li>{amount}</li>
            <li>{description}</li>
            <li>{name}</li>
            <button
              onClick={() =>
                dispatch({
                  type: ActionProduct.DELETE_PRODUCT,
                  payload: { id: id },
                })
              }
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ActionProduct.ADD_AMOUNT,
                  payload: { id: id },
                })
              }
            >
              Add
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ActionProduct.RED_AMOUNT,
                  payload: { id: id },
                })
              }
            >
              Reduce
            </button>
          </ul>
        ))}
      </section>
    </>
  );
}

