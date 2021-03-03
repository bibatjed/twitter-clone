import "./App.css";

import Sidebar from "./Components/Sidebar/Sidebar";

import Main from "./Components/Main/Main";

import Widget from "./Components/Widgets/Widgets";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Widget />
    </div>
  );
}

export default App;
