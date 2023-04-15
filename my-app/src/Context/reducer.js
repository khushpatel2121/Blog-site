const Reducer =(state,action)=>{
    switch(action.type){
        case"LOGIN_START":
        return{
            user:null,
            isFetching:true,
            error:false,
        };
        case"LOGIN_SUCCESS":
        return{
            user:action.payload,
            isFetching: false,
            error:false,
        };
        case"LOGIN_FALIURE":
        return{
            user:null,
            isFetching:false,
            error:true,
        };
        case"UPDATE_START":
        return{
            ...state,
            isFetching:true,
            
        };
        case"UPDATE_SUCCESS":
        return{
            user:action.payload,
            isFetching: false,
            error:false,
        };
        case"UPDATE_FALIURE":
        return{
            user:state.user,
            isFetching:false,
            error:true,
        };
        
        case"LOGOUT":
        return{
            user:null,
            isFetching:null,
            error:null,
        }
        default:
            return state;
    }
}

export default Reducer;