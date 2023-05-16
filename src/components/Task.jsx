import "./Task.css";
import { useStore } from "../store";
import { useState } from "react";

const fullState = ["planned", "pending", "completed"];

export default function Task({ title, currentIdx, order }) {
  const moveTask = useStore((store) => store.moveTask);

  const [pos, setPos] = useState(0);
  const [taskStyle, setTaskStyle] = useState({});
  const [hasDragged, setDragged] = useState(false);

  function dragStart(e) {
    e.preventDefault();

    // Dragged state must be true to move the task.
    setDragged(true);
  }

  function drag(e) {
    if (hasDragged) {
      document.body.style.overflow = "hidden";

      // UI- When the user is dargging the task, change the background color.
      const taskColor =
        (pos < 0 && currentIdx === 0) || (pos > 0 && currentIdx === 2)
          ? "#6161618b"
          : (pos < -150 && currentIdx !== 0) || (pos > 150 && currentIdx !== 2)
          ? "#ffffffce"
          : "#c9c9c98f";

      setPos((prev) => prev + e.movementX);

      // To set styles for the attributes of a task.
      setTaskStyle({
        left: pos,
        background: taskColor,
        cursor: "grabbing",
        transitionDuration: "0s",
      });
    }

    e.stopPropagation();
  }

  function dragLeave() {
    document.body.style.overflow = "auto";

    setDragged(false);

    resetPos();
  }

  function dropped() {
    document.body.style.overflow = "auto";

    setDragged(false);

    // The task move to the next state.
    // The value is stored in the state management.
    if (pos > 150 && currentIdx !== 2) {
      moveTask(title, fullState[currentIdx + 1]);
    }
    if (pos < -150 && currentIdx !== 0) {
      moveTask(title, fullState[currentIdx - 1]);
    }

    resetPos();
  }

  // Return state to its initial state.
  function resetPos() {
    setPos(0);

    setTaskStyle({
      left: 0,
      transitionDuration: "1s",
    });
  }

  return (
    <div className="task" style={{ order: order }}>
      <div
        className="task__item"
        onPointerDown={dragStart}
        onPointerMove={drag}
        onPointerLeave={dragLeave}
        onPointerUp={dropped}
        style={taskStyle}
      >
        <p>{title}</p>
      </div>
    </div>
  );
}
