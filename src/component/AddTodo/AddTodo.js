import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../To_Do_Component/Actions";


const AddTodo = (props) => {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let input = event.target.userinput.value;
          //
          // let pwd = event.target.userpwd.value;
          //
          props.dispatch(addTodo(input));
          event.target.userinput.value = "";
          //
          // props.dispatch(addTodo(pwd));

          //event.target.userpwd.value = "";
          //
        }}
      >
        <label>Enter Name:</label>
         <input type="text" name="userinput"></input>
        <br />
        <br />
        {/* <label>Enter Password:</label>{" "}
        <input type="password" name="userpwd"></input>
        <br />
        <br /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
