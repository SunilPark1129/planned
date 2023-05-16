/*
This page is for helping interact with items and categories.
*/

import React, { useState } from "react";
import { useStore } from "../store";

export default function Plug({ closeModal }) {
  const tasks = useStore((store) => store.tasks);
  const categories = useStore((store) => store.categories);
  const pluginCategory = useStore((store) => store.pluginCategory);

  const [inputOptions, setInputOptions] = useState("plug-in");
  const [checkItems, setCheckItems] = useState({});
  const [checkCategory, setCheckCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState("item");

  // Function to handle radio selection
  function onChangeHandler(e) {
    const { value } = e.target;

    if (value === "plug-out") {
      // If clicked 'plug-out' radio selector then automatically display item lists on the screen
      setModalOpen("item");
    }
    setInputOptions(value);
  }

  // Function to handle checkbox changes
  function checkChangeHandler(e) {
    const { value, checked } = e.target;

    // Update the checkedItems object based on checkbox state
    if (modalOpen === "item") {
      // Create separate objects for item and category values
      setCheckItems((prev) => ({
        ...prev,
        [value]: checked,
      }));
    } else if (modalOpen === "category") {
      setCheckCategory(value);
    }
  }

  // Set the value to display either item or categorie lists
  function openListsHandler(e) {
    const { name } = e.target;
    setModalOpen(name);
  }

  function keyupHandler(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      submitHandler();
    }
  }

  // Function to create checkbox selection
  function displayItems() {
    // Find the selected item in the state manager
    const items = modalOpen === "item" ? [...tasks] : [...categories];

    // modalOpen: Display the checkbox lists either item lists or category lists
    if (modalOpen) {
      return items.map((item) => {
        if (inputOptions === "plug-out") {
          if (item.category === null) return;
        }

        // If checked then display it is selected on the screen
        const isChecked =
          modalOpen === "item"
            ? checkItems[item.title] || false
            : checkCategory === item.title || false;

        // If a category has already been applied to the current item, the screen indicates that this item has a category.
        const currentCategory =
          modalOpen === "item" && item.category ? " -" + item.category : "";

        return (
          <label key={item.title + " -plug"}>
            <input
              type={`${modalOpen === "item" ? "checkbox" : "radio"}`}
              onChange={checkChangeHandler}
              value={item.title}
              checked={isChecked}
            />
            {item.title} <span>{currentCategory}</span>
          </label>
        );
      });
    } else {
      return null;
    }
  }

  // Function to handle form submission
  function submitHandler() {
    // Get the true value from the object
    const transferItems = Object.keys(checkItems).filter(
      (item) => checkItems[item]
    );

    // Send the item to the state manager
    if (inputOptions === "plug-in") {
      // Add categories to items
      if (transferItems.length !== 0 && checkCategory !== null) {
        pluginCategory(transferItems, checkCategory);
      }
    } else {
      // Remove a category from an item
      if (transferItems.length !== 0) {
        pluginCategory(transferItems, null);
      }
    }
    closeModal();
  }

  return (
    <section className="modal" onKeyUp={keyupHandler}>
      <header>
        <h4>Plugin Categories</h4>
      </header>
      <div className="modal__input-box">
        {["plug-in", "plug-out"].map((item) => (
          <label key={item + " -item"}>
            <input
              type="radio"
              value={item}
              checked={inputOptions === item}
              onChange={onChangeHandler}
            />
            {item.charAt(0).toUpperCase() + item.substring(1, item.length)}
          </label>
        ))}
      </div>
      <div className="modal__selector">
        <div>
          <button
            onClick={openListsHandler}
            name="item"
            style={{
              backgroundColor:
                modalOpen === "item" ? "#cdd5eb" : "rgb(234, 236, 236)",
              border:
                modalOpen === "item"
                  ? "1px solid rgba(56, 56, 56, 0.486)"
                  : "1px dashed rgba(34, 34, 34, 0.479)",
            }}
          >
            Select Items
          </button>
          <p>
            {Object.keys(checkItems)
              .filter((item) => checkItems[item])
              .join(", ")}
          </p>
        </div>
        {inputOptions === "plug-in" ? (
          <div>
            <button
              onClick={openListsHandler}
              name="category"
              style={{
                backgroundColor:
                  modalOpen === "category" ? "#cdd5eb" : "rgb(234, 236, 236)",
                border:
                  modalOpen === "category"
                    ? "1px solid rgba(56, 56, 56, 0.486)"
                    : "1px dashed rgba(34, 34, 34, 0.479)",
              }}
            >
              Select Category
            </button>
            <p>{checkCategory}</p>
          </div>
        ) : null}
      </div>
      <div className="modal__lists">{displayItems()}</div>
      <div className="modal__btn-box">
        <button onClick={submitHandler}>SUBMIT</button>
        <button onClick={closeModal}>CLOSE</button>
      </div>
    </section>
  );
}
