import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

// export default App;
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
export default App;
