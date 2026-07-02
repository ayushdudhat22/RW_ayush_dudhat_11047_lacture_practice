import React from "react";
import { useReducer } from "react";



const ItemReducer5 = () => {

   const initialState = {
    counters:[
        {id:1 , count:10},
        {id:2 , count:20}
    ],
    total:30
}

    const Reducer = (state, action) =>{

        switch(action.type){

            case 'INCREMENT' :

                return {
                    ...state,
                    counters: state.counters.map(counter => {
                        return counter.id === action.payload ? {... counter, count : counter.count+ 1} : counter
                    }),
                    
                    total : state.total + 1
                }

            case 'DECREMENT' : 

                return{
                     
                    counters: state.counters.map(counter => {
                        return counter.id === action.payload ? {... counter, count : counter.count - 1} : counter
                    }),
                
                    total : state.total - 1
                }
            

                
                return state;

            case 'RESET':
                return initialState;

            default :
            return state;

            
        }

            
    }


    const [state , dispatch] = useReducer(Reducer ,initialState)

    return(
        <div>

            <div>
                UseReducer Hook in React
            </div>

            <div>

                Total : {state.total}                

            </div>

            <div></div>
            <div>
                {
                    state.counters.map(counter => {
                        return(
                            <div key={counter.id}>
                                <span>{counter.id} : {counter.count}</span>
                                <button onClick={() => dispatch({type:'INCREMENT' , payload: counter.id})}>INCREMENT</button>
                                <button onClick={() => dispatch({type : 'DECREMENT' , payload: counter.id})}> DECREMENT</button>
                                <button onClick={() => dispatch({type : 'RESET'})}> RESet</button>


                            </div>
                        )
                    })
                }
            </div>
            
           
         




        </div>
    )
}


export default ItemReducer5;