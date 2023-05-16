import React, { useState } from "react";
import { useStore } from "../store";

export default function Edit({ closeModal }) {
  const editTask = useStore((store) => store.editTask);
  const editCategory = useStore((store) => store.editCategory);

  const tasks = useStore((store) => store.tasks);
  const categories = useStore((store) => store.categories);

  // Create a state manager object
  const [inputOptions, setInputOptions] = useState({
    item: "item",
    radio: null,
    title: "",
  });

  // Function to handle input
  function onChangeHandler(e) {
    const { value, name } = e.target;
    // Add the object with the new value
    setInputOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function keyupHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      submitHandler();
    }
  }

  // Function to create radio selection
  function displayItems() {
    // Find the selected item in the state manager
    const items = inputOptions.item === "item" ? [...tasks] : [...categories];
    return (
      <div className="modal__lists">
        {items.map((item) => {
          const currentCategory = item.category ? " -" + item.category : "";
          return (
            <label key={item.title + " -edit"}>
              <input
                type="radio"
                onChange={onChangeHandler}
                name="radio"
                value={item.title}
                checked={item.title === inputOptions.radio}
              />
              {item.title} <span>{currentCategory}</span>
            </label>
          );
        })}
      </div>
    );
  }

  // Function to handle form submission
  function submitHandler() {
    const { item, radio, title } = inputOptions;
    if (radio) {
      item === "item" ? editTask(radio, title) : editCategory(radio, title);
    }
    closeModal();
  }

  return (
    <section className="modal" onKeyUp={keyupHandler}>
      <header>
        <h4>Edit Items</h4>
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
      {displayItems()}
      <div className="modal__input-box">
        <p>Rename</p>
        <input
          type="text"
          value={inputOptions.title}
          name="title"
          onChange={onChangeHandler}
        />
      </div>
      <div className="modal__btn-box">
        <button onClick={submitHandler}>SUBMIT</button>
        <button onClick={closeModal}>CLOSE</button>
      </div>
    </section>
  );
}
