import React, { useState } from "react";
import { useStore } from "../store";

export default function Delete({ closeModal }) {
  const deleteTask = useStore((store) => store.deleteTask);
  const deleteCategory = useStore((store) => store.deleteCategory);
  const tasks = useStore((store) => store.tasks);
  const categories = useStore((store) => store.categories);

  const [checkItems, setCheckItems] = useState({});

  // Create a state manager object
  const [inputOptions, setInputOptions] = useState({
    item: "item",
    state: "planned",
    title: "",
    category: null,
  });

  // Function to handle radio button selection
  function selectCategoryHandler(e) {
    const { value, name } = e.target;
    // Update the selected category object with the new value
    setInputOptions({
      [name]: value,
    });
    setCheckItems({});
  }

  // Function to handle checkbox changes
  function checkBoxChangeHandler(e) {
    const { value, checked } = e.target;
    // Update the checkedItems object based on checkbox state
    setCheckItems((prev) => ({
      ...prev,
      [value]: checked,
    }));
  }

  // Return checkbox input lists
  function displayItems() {
    const items = inputOptions.item === "item" ? [...tasks] : [...categories];
    return (
      <div className="modal__lists">
        {items.map((item) => {
          const currentCategory = item.category ? " -" + item.category : "";
          return (
            <label key={item.title + " -delete"}>
              <input
                type="checkbox"
                onChange={checkBoxChangeHandler}
                value={item.title}
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
    // Get the true value from the object
    const filteredItems = Object.keys(checkItems).filter(
      (item) => checkItems[item]
    );

    if (filteredItems.length !== 0) {
      // Send the item to the state manager
      inputOptions.item === "item"
        ? deleteTask(filteredItems)
        : deleteCategory(filteredItems);
    }
    closeModal();
  }

  function keyupHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      submitHandler();
    }
  }

  return (
    <section className="modal" onKeyUp={keyupHandler}>
      <header>
        <h4>Delete Items</h4>
      </header>
      <div className="modal__input-box">
        <label>
          <input
            type="radio"
            value={"item"}
            checked={inputOptions.item === "item"}
            name="item"
            onChange={selectCategoryHandler}
          />
          Item
        </label>
        <label>
          <input
            type="radio"
            value={"category"}
            checked={inputOptions.item === "category"}
            name="item"
            onChange={selectCategoryHandler}
          />
          Category
        </label>
      </div>
      {displayItems()}
      <div className="modal__btn-box">
        <button onClick={submitHandler}>SUBMIT</button>
        <button onClick={closeModal}>CLOSE</button>
      </div>
    </section>
  );
}
