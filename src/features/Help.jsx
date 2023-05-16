import React from "react";

export default function Help({ closeModal }) {
  return (
    <section className="modal">
      <header>
        <h4>Helper</h4>
      </header>
      <ol className="modal__text-box">
        <li>
          Please click on the first sign(plus) in the menu(on the top of the
          screen) to add multiple items in the task.
        </li>
        <li>At the same time, create a category for the grouping the items.</li>
        <li>Now you can view the added items in the PLANNED section.</li>
        <li>Drag the added items to the right.</li>
        <li>
          Now click on the fourth sign(cube) in the menu to group related items
          with the category.
        </li>
        <li>
          Click on the second sign(minus) in the menu to remove items or
          categories from the list.
        </li>
        <li>
          Click on the third sign(pencil) in the menu to rename the item or
          category.
        </li>
      </ol>
      <div className="modal__text-box">
        <p>
          Create your own <span>PLANNED</span> list
        </p>
        <p>Developer - Sunil Park</p>
      </div>
      <div className="modal__btn-box">
        <button onClick={closeModal}>CLOSE</button>
      </div>
    </section>
  );
}
