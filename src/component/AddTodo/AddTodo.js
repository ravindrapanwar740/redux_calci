import React from "react";
import { connect } from "react-redux";
import {  addTodo } from "../../To_Do_Component/Actions";
import { Button,Form,InputGroup ,FormControl} from 'react-bootstrap';

const AddTodo = (props) => {
  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          let input = event.target.userinput.value;
         // 
          //let pwd = event.target.userpwd.value;
         // 
          props.dispatch(addTodo(input));
          event.target.userinput.value = "";
          //
         // props.dispatch(addPwd(pwd));
          //
         // event.target.userpwd.value = "";
          
        }}
      >
        {/* <label>Enter Name:</label> */}
        {/* <input type="text" name="userinput"></input> */}
        <div className="col-sm-6 offset-sm-3">
        <InputGroup className="mb-3">
   
    <FormControl 
      placeholder="✍️Enter Data...."
      aria-label="Username"
      aria-describedby="basic-addon1"
      type="text" name="userinput"
    />
  </InputGroup>
  </div>
        <br />
        
        {/* <label>Enter Password:</label>
        <input type="password" name="userpwd"></input>
        <br />
        <br /> */}
        
      <> <Button variant="primary" type="submit">Submit</Button></>
      </Form>
    </div>
  );
};

export default connect()(AddTodo);
