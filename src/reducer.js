function reducer(state,action){
    // console.log(action);
    switch(action.type){
        case'increment':{
            return {value:state.value+1}
        }
        case'decrement':{
            return {value:state.value-1}
        }
        case'reset':{
            return {value:0}
        }
    }
    return state;
    

} export default reducer