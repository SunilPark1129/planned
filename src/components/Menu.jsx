import React, { useState, useEffect } from "react";
import { Add, Delete, Plug, Edit, Help, Trash } from "../features/index";

import imgAdd from "../assets/plus.svg";
import imgBox from "../assets/box.svg";
import imgMinus from "../assets/minus.svg";
import imgEdit from "../assets/edit-2.svg";
import imgHelp from "../assets/help-circle.svg";
import imgTrash from "../assets/trash-2.svg";

import "./Menu.css";

const datas = [
  { img: imgAdd, name: "add" },
  { img: imgMinus, name: "delete" },
  { img: imgEdit, name: "edit" },
  { img: imgBox, name: "plug" },
  { img: imgHelp, name: "help" },
  { img: imgTrash, name: "trash" },
];

export default function Menu() {
  const [modalName, setModalName] = useState(null);

  useEffect(() => {
    if (modalName) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalName]);

  // Closing the current modal.
  // If the modalName is null, the modalHandler function returns null.
  function closeModal() {
    setModalName(null);
  }

  function modalHandler() {
    if (modalName === "add") {
      return <Add closeModal={closeModal} />;
    }

    if (modalName === "delete") {
      return <Delete closeModal={closeModal} />;
    }

    if (modalName === "edit") {
      return <Edit closeModal={closeModal} />;
    }

    if (modalName === "plug") {
      return <Plug closeModal={closeModal} />;
    }

    if (modalName === "help") {
      return <Help closeModal={closeModal} />;
    }

    if (modalName === "trash") {
      return <Trash closeModal={closeModal} />;
    }

    return null;
  }

  return (
    <nav className="menu">
      <div className="menu__lists">
        {datas.map(({ img, name }) => {
          return (
            <img
              src={img}
              alt={name}
              name={name}
              title={name}
              onClick={() => setModalName(name)}
              key={name}
            />
          );
        })}
      </div>
      {/* When the modal is opened, the background is set to the style of the bg-dark class. */}
      {modalName ? <div className="bg-dark" onClick={closeModal}></div> : null}
      {modalHandler()}
    </nav>
  );
}
