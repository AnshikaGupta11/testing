const redux = require('redux')
const createstore = redux.createstore

const CAKE_ORDERED = 'CAKE_ORDERED'

function ordercake(){
    return{
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

const initialstate = {
    numofcake: 10,
}

const reducer = (state = initialstate, action) => {
    switch(action.type)
    {
        case CAKE_ORDERED:
        return{
            numofcake: state.numofcake-1 ,
        }
        default:
             return state
    }
}

const store = createstore(reducer)
console.log('initial state, store.getdata()')

const unsubzcribe = store.subscribe()
console.log('update state, store.getdata()')
store.dispatch(ordercake())
store.dispatch(ordercake())
store.dispatch(ordercake())
unsubzcribe()