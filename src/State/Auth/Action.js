import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

//the token we stored in local_storage, same token will be used here. token is required in getUser method
const token=localStorage.getItem("jwt");

//Signup method
//if registered successfully then we will get user in payload and we will pass user in dispatcher.
//similarly if register fail then we will get error.

const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS, payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE, payload:error});

export const register=(userData)=>async (dispatch)=>{
    //1st calling registerRequest() method
    dispatch(registerRequest())

    try {
        const response=await axios.post(`${API_BASE_URL}/auth/signup`,userData)
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("user", user)
        //if register successfully then set user in payload
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        //if registration fail
        dispatch(registerFailure(error.message))
        
    }

}

//Similarly for login

const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS, payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE, payload:error});

export const login=(userData)=>async (dispatch)=>{
    //1st calling loginRequest() method
    dispatch(loginRequest())

    try {
        const response=await axios.post(`${API_BASE_URL}/auth/signin`,userData)
        const user=response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("user", user)
        //if login successfully then set user in payload
        dispatch(loginSuccess(user.jwt))
    } catch (error) {
        //if login fail
        dispatch(loginFailure(error.message))
        
    }

}

//Similarly for getUser

const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS, payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE, payload:error});

export const getUser=(jwt)=>async (dispatch)=>{
    //No need to pass userData in dispatch
    //1st calling loginRequest() method
    dispatch(getUserRequest())

    try {
        //GET method in place of POST. In GET method we will pass header along with token in it
        const response=await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers: {
                "Authorization":`Bearer ${jwt}`
            }
        })
        const user=response.data;
        console.log("user", user)

        dispatch(getUserSuccess(user))

    } catch (error) {
        //if getUser fail
        dispatch(getUserFailure(error.message))
        
    }

}

//Method for Logout. Also need to export it.

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT, payload:null})
    localStorage.clear() //clearing local storage so that after logout stored jwt token could be cleared
}

//Now time to write reducer in Reducer.js