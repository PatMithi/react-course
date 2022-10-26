import React from "react";
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>My Tools</h1>
      <Todo text="Hello"/>
      <Todo text="Get a Job"/>
      <Todo text="Build a house"/>
    </div>
  );
}

export default App;
