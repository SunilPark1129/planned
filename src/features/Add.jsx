import React, { useEffect, useRef, useState } from "react";
import { useStore } from "../store";

const initVal = { item: "item", state: "planned", title: "", category: null };

export default function Add({ closeModal }) {
  const addTask = useStore((store) => store.addTask);
  const addCategoryTask = useStore((store) => store.addCategoryTask);
  const tasks = useStore((store) => store.tasks.map((item) => item.title));
  const categories = useStore((store) =>
    store.categories.map((item) => item.title)
  );

  // Create a boolean flag to track the validity of the input
  const [isValidInput, setValidInput] = useState(null);

  // Create a state manager object
  const [inputOptions, setInputOptions] = useState(initVal);
  const typeRef = useRef(null);

  // Opening the modal automatically focuses on the input.
  useEffect(() => {
    typeRef.current.focus();
  }, []);

  // Function to handle input
  function onChangeHandler(e) {
    const { value, name } = e.target;
    // Add the object with the new value
    setInputOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler() {
    const { item, state, title, category } = inputOptions;

    if (title.trim() !== "") {
      // Selected radio value is item
      if (item === "item") {
        if (tasks.includes(title)) {
          setValidInput(false);
          return;
        }
        addTask(title, state, category);
      }
      // Selected radio value is category
      else if (item === "category") {
        if (categories.includes(title)) {
          setValidInput(false);
          return;
        }
        addCategoryTask(title);
      }
      setValidInput(true);
      setInputOptions((prev) => ({
        ...prev,
        title: "",
      }));
      typeRef.current.focus();
    }
  }

  function keyupHandler(e) {
    // enter key
    if (e.keyCode === 13) {
      e.preventDefault();
      submitHandler();
    }
  }

  return (
    <section className="modal" onKeyUp={keyupHandler}>
      <header>
        <h4>Add Items</h4>
      </header>
      <div className="modal__input-box">
        {["item", "category"].map((item) => (
          <label key={item + " -item"}>
            <input
              type="radio"
              value={item}
              checked={inputOptions.item === item}
              name="item"
              onChange={onChangeHandler}
            />
            {item.charAt(0).toUpperCase() + item.substring(1, item.length)}
          </label>
        ))}
      </div>
      {inputOptions.item === "item" ? (
        <div className="modal__input-box">
          {["planned", "pending", "completed"].map((item) => (
            <label key={item + " -state"}>
              <input
                type="radio"
                value={item}
                name="state"
                checked={inputOptions.state === item}
                onChange={onChangeHandler}
              />
              {item.charAt(0).toUpperCase() + item.substring(1, item.length)}
            </label>
          ))}
        </div>
      ) : null}
      <p>
        <span
          style={{
            color: `${
              isValidInput ? "green" : isValidInput === null ? "black" : "red"
            }`,
          }}
        >
          {/* Display error message if input is invalid */}
          {isValidInput
            ? "Item has been added."
            : isValidInput === null
            ? "Waiting for a submit."
            : "Dupplicated title is not acceptable."}
        </span>
      </p>
      <div className="modal__input-box">
        <label>
          Title
          <input
            type="text"
            value={inputOptions.title}
            name="title"
            ref={typeRef}
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="modal__btn-box">
        <button onClick={submitHandler}>SUBMIT</button>
        <button onClick={closeModal}>CLOSE</button>
      </div>
    </section>
  );
}
