import logo from './logo.svg';
import './App.css';
import Reducer from './components/Reducer';
import UI from './components/UI';
import AddTodo from './component/AddTodo/AddTodo';
import List from './component/List/List';


function App() {
  return (
    <div className="App">
   <h1>App Component</h1>
   <AddTodo />
   <List />
   {/* <Reducer />
   <UI /> */}
    </div>
  );
}

export default App;


// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice'
// import styles from './Counter.module.css'
//  function Counter() {
//   const count = useSelector(selectCount)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//       </div>
//       {/* omit additional rendering output here */}
//     </div>
//   )
// }