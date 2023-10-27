import { api } from "../../config/apiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./ActionType"

export const createPayment=(orderId)=>async (dispatch)=>{
    
    dispatch({type:CREATE_PAYMENT_REQUEST})

    try {
        const {data} = api.post(`/api/payments/${orderId}`,{});
        
        if(data.payment_link_url){
            window.location.href=data.payment_link_url;
        }
    } catch (error) {
        dispatch({type:CREATE_PAYMENT_FAILURE, payload:error.message})
    }
}

export const updatePayment=(reqData)=>async (dispatch)=>{
    
    dispatch({type:UPDATE_PAYMENT_REQUEST});

    try {
        const {data} = api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        
        console.log("update payment : - ", data)
        //it will change order status and payment details in database which we do not need to show in front end.
        //Therefore we do not need to put it in reducer.
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE, payload:error.message})
    }
}