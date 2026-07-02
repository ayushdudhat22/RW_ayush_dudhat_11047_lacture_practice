import React from "react";
import { useReducer } from "react";



const ItemReducer = () => {

    const intialstate = {count : 10 };

    const Reducer = (state, action) =>{

        switch(action.type){

            case 'INCREMENT' :
                return {count : state.count + 1}; 
            case 'DECREMENT' : 
                if(state.count > 0){

                    return {count : state.count - 1};
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
                Counter :- {count.count}

            </div>

            <div>
                <button onClick={() => dispatch({type : 'INCREMENT'})}> INCREMENT</button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}> DECREMENT</button>
                <button onClick={() => dispatch({type : 'RESET'})}> RESet</button>
            </div>

        </div>
    )
}


export default ItemReducer;