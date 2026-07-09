import React from "react";
import { useReducer } from "react";



const UseReducer = () => {

    const intialstate = 10;

    const Reducer = (state, action) =>{

        switch(action.type){

            case 'INCREMENT' :
                return state + 1; 
            case 'DECREMENT' : 
                if(state > 0){

                    return state -1;
                }
                return state;

            case 'RESET':
                return intialstate;

            default :
            return state;

            
        }

    }

    const [count , dispatch] = useReducer(Reducer, intialstate)

    return(
        <div>

            <div>
                UseReducer Hook in React
            </div>

            <div>
                Counter :- {count}

            </div>

            <div>
                <button onClick={() => dispatch({type : 'INCREMENT'})}> INCREMENT</button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}> DECREMENT</button>
                <button onClick={() => dispatch({type : 'RESET'})}> RESet</button>
            </div>

        </div>
    )
}


export default UseReducer;