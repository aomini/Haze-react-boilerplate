import React from "react";
import Developers from "./features/Developers";
import Create from "./features/Developers/Create";
import "./App.css";
import List from "./features/Developers/List";

const App = () => {
  const [editable, setEditable] = React.useState<number | null>(null)

  return (
    <main className="employees">
      <Developers onSetEditable={setEditable} />
      <List />
      <Create editable={editable}/>
    </main>
  );
};

export default App;
