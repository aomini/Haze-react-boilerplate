import React from "react";
import Developers from "./features/Developers";
import Create from "./features/Developers/Create";
import List from "./features/Developers/List";
import Style from "./app.module.scss"
import "./styles/global.scss"

const App = () => {
  const [editable, setEditable] = React.useState<number | null>(null)

  return (
    <main className={Style.employees}>
      <Developers onSetEditable={setEditable} />
      <List />
      <Create editable={editable}/>
    </main>
  );
};

export default App;
