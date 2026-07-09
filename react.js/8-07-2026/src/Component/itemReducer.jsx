 }
    ) 
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