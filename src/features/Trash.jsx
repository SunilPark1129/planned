import React from "react";
import { useStore } from "../store";
export default function Trash({ closeModal }) {
  const trashData = useStore((store) => store.trashData);
  function submitHandler() {
    // Remove all tasks and categories state to make them initialized
    trashData();
    closeModal();
  }
  return (
    <section className="modal">
      <header>
        <h4>Reset All</h4>
      </header>
      <div className="modal__text-box">
        <p>
          Do you really want to <span>delete</span> all datas?
        </p>
        <p>
          Press <span>YES</span> to delete all tasks.
        </p>
      </div>
      <div className="modal__btn-box">
        <button onClick={submitHandler}>YES</button>
        <button onClick={closeModal}>NO</button>
      </div>
    </section>
  );
}
