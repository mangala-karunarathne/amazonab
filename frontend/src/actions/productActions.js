import { Axios } from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = async(dispatch) => {
    dispatchEvent({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const {data} = await Axios.get('http://localhost:5000/api/products');
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch {
        dispatch({type: PRODUCT_LIST_FAIL, payload: console.messsage});
    }
};
