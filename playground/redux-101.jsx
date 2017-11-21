import { createStore } from 'redux';

//with destructuring
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    //incrementBy: incrementBy
    incrementBy
});

//without destructuring
const decrementCount = (payload = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
    }
}

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }

});

store.subscribe(() => {
    console.log(store.getState());
});

//Actions - An object that gets sent to the store
// Increment the count
// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
// );
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
//RESET
store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 101 }));
