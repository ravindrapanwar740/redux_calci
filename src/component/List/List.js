import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../To_Do_Component/Actions";
//import { addPwd } from "../../To_Do_Component/Actions";

const List = (props) => {
  return (
    <ul>
      {props.todo.map((to, index) => (
        <li key={index}>{to.message}
        <button onClick={()=>props.dispatch(deleteTodo(to.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo.data,
 // pwd:state.pwd.pwd{to.pwd}
});

export default connect(mapStateToProps)(List);
