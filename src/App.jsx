/*
This website is divided into two parent components.

Menu: handles all functionalities such as adding, and removing tasks.
Column: displays all the information recorded on the screen.

Developed by Sunil Park
*/

import Column from "./components/Column";
import Menu from "./components/Menu";
function App() {
  const state = [
    { status: "planned", bg: "rgb(185, 207, 236)", id: 0 },
    { status: "pending", bg: "rgb(194, 167, 167)", id: 1 },
    { status: "completed", bg: "rgb(180, 207, 167)", id: 2 },
  ];
  return (
    <div className="App">
      <Menu />
      {state.map((item) => (
        <Column state={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
