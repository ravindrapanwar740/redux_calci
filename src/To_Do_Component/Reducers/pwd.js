const initialState={
   // data:[],
    pwd:[]
    
}
const pwd=(state=initialState,action)=>
{
switch(action.type){
    case 'PWD_TODO':
        return{}
// ...state,data:[
//     ...state.data,
//     {
//         message:action.message,
//         id:action.id,
//     }
// ]
      default:
    return state
        
    }
}