import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../To_Do_Component/Actions";

import { Button, Form } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const List = (props) => {
  return (
    <div>
    <Form>
    <ul>
      {props.todo.map((to, index) => (
        <li key={index}> {to.message}
        <FontAwesomeIcon icon={faTrashAlt}  onClick={()=>props.dispatch(deleteTodo(to.id)) } variant="danger"/>
        </li>
      ))}
    </ul>
    </Form>
    </div>
  );
};


const mapStateToProps = (state) => ({
  todo: state.todo.data,
 
});

export default connect(mapStateToProps)(List);

//<Form.Check type="checkbox" label="" />