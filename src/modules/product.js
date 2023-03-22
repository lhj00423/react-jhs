//2.초기값
const initialState = {
    mug : {
        loading : false,
        data : null,
        error : null
    }, 
    glass : {
        loading : false,
        data : null,
        error : null
    },
    ptumbler : {
        loading : false,
        data : null,
        error : null
    },
    stumbler : {
        loading : false,
        data : null,
        error : null
    },
    accessory : {
        loading : false,
        data : null,
        error : null
    },
    coffegoods : {
        loading : false,
        data : null,
        error : null
    }
}

//mug
const GET_MUG = "GET_MUG";
const GET_MUG_SUCCESS = "GET_MUG_SUCCESS";
const GET_MUG_ERROR = "GET_MUG_ERROR";

export const getMug = (callback) => async dispatch => {
    dispatch({ type : GET_MUG });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_MUG_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_MUG_ERROR , error : e})
    }
}

//glass
const GET_GLASS = "GET_GLASS";
const GET_GLASS_SUCCESS = "GET_GLASS_SUCCESS";
const GET_GLASS_ERROR = "GET_GLASS_ERROR";

export const getGlass = (callback) => async dispatch => {
    dispatch({ type : GET_GLASS });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_GLASS_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_GLASS_ERROR , error : e})
    }
}

//ptumbler
const GET_PTUMBLER = "GET_PTUMBLER";
const GET_PTUMBLER_SUCCESS = "GET_PTUMBLER_SUCCESS";
const GET_PTUMBLER_ERROR = "GET_PTUMBLER_ERROR";

export const getPtumbler = (callback) => async dispatch => {
    dispatch({ type : GET_PTUMBLER });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_PTUMBLER_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_PTUMBLER_ERROR , error : e})
    }
}

//stumbler
const GET_STUMBLER = "GET_STUMBLER";
const GET_STUMBLER_SUCCESS = "GET_STUMBLER_SUCCESS";
const GET_STUMBLER_ERROR = "GET_STUMBLER_ERROR";

export const getStumbler = (callback) => async dispatch => {
    dispatch({ type : GET_STUMBLER });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_STUMBLER_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_STUMBLER_ERROR , error : e})
    }
}

//accessory
const GET_ACCESSORY = "GET_ACCESSORY";
const GET_ACCESSORY_SUCCESS = "GET_ACCESSORY_SUCCESS";
const GET_ACCESSORY_ERROR = "GET_ACCESSORY_ERROR";

export const getAccessory = (callback) => async dispatch => {
    dispatch({ type : GET_ACCESSORY });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_ACCESSORY_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_ACCESSORY_ERROR , error : e})
    }
}

//coffegoods
const GET_COFFEGOODS = "GET_COFFEGOODS";
const GET_COFFEGOODS_SUCCESS = "GET_COFFEGOODS_SUCCESS";
const GET_COFFEGOODS_ERROR = "GET_COFFEGOODS_ERROR";

export const getCoffegoods = (callback) => async dispatch => {
    dispatch({ type : GET_COFFEGOODS });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_COFFEGOODS_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_COFFEGOODS_ERROR , error : e})
    }
}

export default function food(state=initialState,action){
    switch(action.type){
        case GET_MUG :
            return{
                ...state,
                mug : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_MUG_SUCCESS :
            return{
                ...state,
                mug : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_MUG_ERROR :
            return{
                ...state,
                mug : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //glass
        case GET_GLASS :
            return{
                ...state,
                glass : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_GLASS_SUCCESS :
            return{
                ...state,
                glass : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_GLASS_ERROR :
            return{
                ...state,
                glass : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //ptumbler
        case GET_PTUMBLER :
            return{
                ...state,
                ptumbler : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_PTUMBLER_SUCCESS :
            return{
                ...state,
                ptumbler : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_PTUMBLER_ERROR :
            return{
                ...state,
                ptumbler : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //stumbler
        case GET_STUMBLER :
            return{
                ...state,
                stumbler : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_STUMBLER_SUCCESS :
            return{
                ...state,
                stumbler : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_STUMBLER_ERROR :
            return{
                ...state,
                stumbler : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //accessory
        case GET_ACCESSORY :
            return{
                ...state,
                accessory : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_ACCESSORY_SUCCESS :
            return{
                ...state,
                accessory : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_ACCESSORY_ERROR :
            return{
                ...state,
                accessory : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //coffegoods
        case GET_COFFEGOODS :
            return{
                ...state,
                coffegoods : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_COFFEGOODS_SUCCESS :
            return{
                ...state,
                coffegoods : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_COFFEGOODS_ERROR :
            return{
                ...state,
                coffegoods : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        default :
        return state;
    }
}