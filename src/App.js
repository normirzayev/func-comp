import React from 'react';
import "./app.css";
import Main_Reducer from "./dispatch/Main_Reducer"
function App() {
  return (
    <div className='app'>
      <Main_Reducer />
    </div>
  );
}

export default App;
