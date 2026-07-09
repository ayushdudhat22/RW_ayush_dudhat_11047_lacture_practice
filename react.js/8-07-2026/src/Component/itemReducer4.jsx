import React from "react";
import { useReducer } from "react";



const ItemReducer4 = () => {

    const intialstate = { count: 10, count2: 20 };

    const Reducer = (state, action) => {

        switch (action.type) {

            case 'INCREMENT':
                return {

                    ...state,
                    count: state.count + 1
                }
                    ;

            case 'DECREMENT':
                if (state.count > 0) {

                    return {
                        ...state,
                        count: state.count - 1
                    };
                }
                return state;

            case "INCREMENT2":
                return {
                    ...state,
                    count2: state.count2 + 1,
                };

            case "DECREMENT2":
                return {
                    ...state,
                    count2: state.count2 - 1,
                };

            case 'RESET':
                return intialstate;

            default:
                return state;


        }

    }



    const [count, dispatch] = useReducer(Reducer, intialstate)

    return (
        <div>

            <div>
                UseReducer Hook in React
            </div>

            <h3>
                Counter1 :- {count.count}

            </h3>



            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}> INCREMENT</button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}> DECREMENT</button>
                <button onClick={() => dispatch({ type: 'RESET' })}> RESet</button>
            </div>

            <h3>Counter2: {count.count2}</h3>

            <button onClick={() => dispatch({ type: "INCREMENT2" })}>
                INCREMENT 
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT2" })}>
                DECREMENT 
            </button>

            <button onClick={() => dispatch({ type: 'RESET' })}> RESet</button>






        </div>
    )
}


export default ItemReducer4;