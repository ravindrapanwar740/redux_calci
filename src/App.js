
import './App.css';
//import Reducer from './components/Reducer';
//import UI from './components/UI';
import AddTodo from './component/AddTodo/AddTodo';
import List from './component/List/List';
import {Badge} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div className="homepage-bgimage">
 <figure>📝
 
<figcaption><h1>
    <Badge bg="info">ToDo List✌️</Badge> </h1></figcaption>
 </figure>
   <AddTodo />
   <List />
   {/* <Reducer />
   <UI /> */}
    </div>
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