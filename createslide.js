const redux = require('redux')
const createstore=redux.createstore
const cake_ordered='cake_ordered'
function ordercake(){return{
    type:cake_ordered,
    quantity:1
}
}
const initialstate={
    num_of_cake : 10
}
const reducer=(state=initialstate,action)=>{
    switch(action.type)
    {
        case cake_ordered:
    return{
        num_of_cake:state.num_of_cake-1
    }
    default:returnstate
    }
}