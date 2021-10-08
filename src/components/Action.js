import React from 'react'


function Action(props) {
    console.log("Action",props.data.name)
    return (
        <div>
           <h1>Action Component:{props.data.name}</h1> 
        </div>
    )
}

export default Action
