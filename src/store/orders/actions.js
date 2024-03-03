import {orders} from "../../utils/data.js";

export const GET_ORDERS_FROM_DB = "ORDERS::GET_ORDERS_FROM_DB"
export const getOrdersFromDB = (payload) => ({
    type: GET_ORDERS_FROM_DB,
    payload: payload,
});

export const getOrders = () => {
    return function (dispatch) { return dispatch(getOrdersFromDB(orders))};
};

export const CHANGE_ORDERS_IN_DB_PENDING = "ORDERS::CHANGE_ORDERS_IN_DB_PENDING"
export const CHANGE_ORDERS_IN_DB_SUCCESS = "ORDERS::CHANGE_ORDERS_IN_DB_SUCCESS"
export const CHANGE_ORDERS_IN_DB_FAILURE = "ORDERS::CHANGE_ORDERS_IN_DB_FAILURE"

export const changeOrderInDBPending = () => ({
    type: CHANGE_ORDERS_IN_DB_PENDING,
});
export const changeOrderInDBSuccess = (data) => ({
    type: CHANGE_ORDERS_IN_DB_SUCCESS,
    payload: data
});
export const changeOrderInDBFailure = (error) => ({
    type: CHANGE_ORDERS_IN_DB_FAILURE,
    payload: error
});

export const changeOrder = (data) => async (dispatch) => {
    console.log('!!!!!', data)
    const dataNew = {
        id: 4,
        name: data.name,
        address: data.address,
        description: data.description,
        deliveryDatetime: data.deliveryDatetime,
        courierID: 40
    };

    dispatch(changeOrderInDBPending());
    // console.log('changeOrder', data)
    try {
        dispatch(changeOrderInDBSuccess(dataNew));
    } catch (e) {
        // console.log('error', e);
        dispatch(changeOrderInDBFailure(e.message));
    }
};

export const CREATE_ORDER_IN_DB_PENDING = "ORDERS::CREATE_ORDER_IN_DB_PENDING"
export const CREATE_ORDER_IN_DB_SUCCESS = "ORDERS::CREATE_ORDER_IN_DB_SUCCESS"
export const CREATE_ORDER_IN_DB_FAILURE = "ORDERS::CREATE_ORDER_IN_DB_FAILURE"

export const createOrderInDBPending = () => ({
    type: CREATE_ORDER_IN_DB_PENDING,
});
export const createOrderInDBSuccess = (data) => ({
    type: CREATE_ORDER_IN_DB_SUCCESS,
    payload: data
});
export const createOrderInDBFailure = (error) => ({
    type: CREATE_ORDER_IN_DB_FAILURE,
    payload: error
});

export const createOrder = (data) => async (dispatch) => {
    console.log('!!!!!', data)
    const dataNew = {
        id: 4,
        name: data.name,
        address: data.address,
        description: data.description,
        deliveryDatetime: data.deliveryDatetime,
        courierID: 40
    };
    
    dispatch(createOrderInDBPending());

    try {
        dispatch(createOrderInDBSuccess(dataNew));
    } catch (error) {
        console.log('error', error);
        dispatch(createOrderInDBFailure(error.message));
    }
}