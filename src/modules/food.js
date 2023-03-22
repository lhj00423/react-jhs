
//2.초기값
const initialState = {
    bread : {
        loading : false,
        data : null,
        error : null
    }, 
    cake : {
        loading : false,
        data : null,
        error : null
    },
    sandwich : {
        loading : false,
        data : null,
        error : null
    },
    food : {
        loading : false,
        data : null,
        error : null
    },
    fruit : {
        loading : false,
        data : null,
        error : null
    },
    snack : {
        loading : false,
        data : null,
        error : null
    }
    ,
    icecream : {
        loading : false,
        data : null,
        error : null
    }
}

//bread
const GET_BREAD = "GET_BREAD";
const GET_BREAD_SUCCESS = "GET_BREAD_SUCCESS";
const GET_BREAD_ERROR = "GET_BREAD_ERROR";

export const getBread = (callback) => async dispatch => {
    dispatch({ type : GET_BREAD });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_BREAD_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_BREAD_ERROR , error : e})
    }
}

//cake
const GET_CAKE = "GET_CAKE";
const GET_CAKE_SUCCESS = "GET_CAKE_SUCCESS";
const GET_CAKE_ERROR = "GET_CAKE_ERROR";

export const getCake = (callback) => async dispatch => {
    dispatch({ type : GET_CAKE });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_CAKE_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_CAKE_ERROR , error : e})
    }
}

//sandwich
const GET_SANDWICH = "GET_SANDWICH";
const GET_SANDWICH_SUCCESS = "GET_SANDWICH_SUCCESS";
const GET_SANDWICH_ERROR = "GET_SANDWICH_ERROR";

export const getSandwich = (callback) => async dispatch => {
    dispatch({ type : GET_SANDWICH });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_SANDWICH_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_SANDWICH_ERROR , error : e})
    }
}

//food
const GET_FOOD = "GET_FOOD";
const GET_FOOD_SUCCESS = "GET_FOOD_SUCCESS";
const GET_FOOD_ERROR = "GET_FOOD_ERROR";

export const getFood = (callback) => async dispatch => {
    dispatch({ type : GET_FOOD });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_FOOD_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_FOOD_ERROR , error : e})
    }
}

//fruit
const GET_FRUIT = "GET_FRUIT";
const GET_FRUIT_SUCCESS = "GET_FRUIT_SUCCESS";
const GET_FRUIT_ERROR = "GET_FRUIT_ERROR";

export const getFruit = (callback) => async dispatch => {
    dispatch({ type : GET_FRUIT });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_FRUIT_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_FRUIT_ERROR , error : e})
    }
}

//snack
const GET_SNACK = "GET_SNACK";
const GET_SNACK_SUCCESS = "GET_SNACK_SUCCESS";
const GET_SNACK_ERROR = "GET_SNACK_ERROR";

export const getSnack = (callback) => async dispatch => {
    dispatch({ type : GET_SNACK });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_SNACK_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_SNACK_ERROR , error : e})
    }
}

//icecream
const GET_ICECREAM = "GET_ICECREAM";
const GET_ICECREAM_SUCCESS = "GET_ICECREAM_SUCCESS";
const GET_ICECREAM_ERROR = "GET_ICECREAM_ERROR";

export const getIcecream = (callback) => async dispatch => {
    dispatch({ type : GET_ICECREAM });
    try{
        const response = await callback();
        const data = response.data
        dispatch({ type : GET_ICECREAM_SUCCESS , data : data})
    }
    catch(e){
        dispatch({ type : GET_ICECREAM_ERROR , error : e})
    }
}

export default function food(state=initialState,action){
    switch(action.type){
        case GET_BREAD :
            return{
                ...state,
                bread : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_BREAD_SUCCESS :
            return{
                ...state,
                bread : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_BREAD_ERROR :
            return{
                ...state,
                bread : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //cake
        case GET_CAKE :
            return{
                ...state,
                cake : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_CAKE_SUCCESS :
            return{
                ...state,
                cake : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_CAKE_ERROR :
            return{
                ...state,
                cake : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //sandwich
        case GET_SANDWICH :
            return{
                ...state,
                sandwich : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_SANDWICH_SUCCESS :
            return{
                ...state,
                sandwich : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_SANDWICH_ERROR :
            return{
                ...state,
                sandwich : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //food
        case GET_FOOD :
            return{
                ...state,
                food : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_FOOD_SUCCESS :
            return{
                ...state,
                food : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_FOOD_ERROR :
            return{
                ...state,
                food : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //fruit
        case GET_FRUIT :
            return{
                ...state,
                fruit : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_FRUIT_SUCCESS :
            return{
                ...state,
                fruit : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_FRUIT_ERROR :
            return{
                ...state,
                fruit : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //snack
        case GET_SNACK :
            return{
                ...state,
                snack : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_SNACK_SUCCESS :
            return{
                ...state,
                snack : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_SNACK_ERROR :
            return{
                ...state,
                snack : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        //icecream
        case GET_ICECREAM :
            return{
                ...state,
                icecream : {
                    loading : true,
                    data : null,
                    error : null
                }
            };
        case GET_ICECREAM_SUCCESS :
            return{
                ...state,
                icecream : {
                    loading : false,
                    data : action.data,
                    error : null
                }
            };
        case GET_ICECREAM_ERROR :
            return{
                ...state,
                icecream : {
                    loading : false,
                    data : null,
                    error : action.error
                }
            };
        default :
        return state;
    }
}