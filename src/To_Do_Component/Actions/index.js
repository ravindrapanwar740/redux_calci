const ADD_TODO='ADD_TODO'

export const addTodo=(message)=>({
type:ADD_TODO,
message,
id:Math.random()   
})

//
// const ADD_PWD='ADD_PWD'

//  export const addPwd=(pwd)=>({
//  type:ADD_PWD,
//  pwd,
//id:Math.random()   
//})
//

const DELETE_TODO='DELETE_TODO'

export const deleteTodo=(id)=>({
type:DELETE_TODO,
id    
})

