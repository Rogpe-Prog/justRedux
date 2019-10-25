const { createStore } = require('redux')

reducer = (state = 10, action) => {
    switch(action.type){
        case 'INC':
            return state + 10
        case 'DEC':
            return state - 10
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(()=> console.log(store.getState()))

store.dispatch({ type: 'INC' })
