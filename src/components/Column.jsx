import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

export default function Column({ state }) {
  const { status, bg, id } = state;

  // All schedules are contained in tasks
  const tasks = useStore((store) => {
    let temp = {};
    [...store.tasks].forEach((item) => {
      if (status === item.state) {
        // Categories are grouped together in arrays based on their similarity
        if (item.category in temp) {
          temp = { ...temp, [item.category]: [...temp[item.category], item] };
        } else {
          temp = { ...temp, [item.category]: [item] };
        }
      }
    });
    return temp;
  });

  // Rank orders by category
  const orders = useStore((store) => {
    let orders = {};
    [...store.categories].forEach((item, idx) => {
      orders = { ...orders, [item.title]: idx };
    });
    return orders;
  });

  return (
    <main className={"column"} style={{ backgroundColor: bg }}>
      <div className="dot"></div>
      <header>
        <h3>{status.toUpperCase()}</h3>
      </header>
      {Object.entries(tasks).map(([category, value]) => {
        if (category !== "null") {
          // Items of the same type are listed together.
          return (
            <div
              className="category-box"
              key={category + " -category"}
              style={{ order: orders[category] }}
            >
              <p>{category}</p>
              <div className="dot" style={{ backgroundColor: bg }}></div>
              {value.map((task) => {
                return (
                  <Task
                    key={task.title + " -item"}
                    title={task.title}
                    currentIdx={id}
                    isItem={true}
                  />
                );
              })}
            </div>
          );
        } else {
          //  If there are no categories, they are listed one by one.
          return value.map((task) => {
            return (
              <Task
                title={task.title}
                key={task.title + " -item"}
                state={status}
                currentIdx={id}
                isItem={true}
                order={999}
              />
            );
          });
        }
      })}
    </main>
  );
}
