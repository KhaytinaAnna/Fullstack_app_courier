import {couriers} from "../../utils/data.js";

export const GET_COURIERS_FROM_DB = "COURIERS::GET_COURIERS_FROM_DB"

export const getCouriersFromDB = (payload) => ({
  type: GET_COURIERS_FROM_DB,
  payload: payload
});

export const getCouriers = () => {
  return function (dispatch) { return dispatch(getCouriersFromDB(couriers))};
};

export const CHANGE_COURIERS_IN_DB_PENDING = "COURIERS::CHANGE_COURIERS_IN_DB_PENDING"
export const CHANGE_COURIERS_IN_DB_SUCCESS = "COURIERS::CHANGE_COURIERS_IN_DB_SUCCESS"
export const CHANGE_COURIERS_IN_DB_FAILURE = "COURIERS::CHANGE_COURIERS_IN_DB_FAILURE"

export const changeCourierInDBPending = () => ({
    type: CHANGE_COURIERS_IN_DB_PENDING,
});
export const changeCourierInDBSuccess = (data) => ({
    type: CHANGE_COURIERS_IN_DB_SUCCESS,
    payload: data
});
export const changeCourierInDBFailure = (error) => ({
    type: CHANGE_COURIERS_IN_DB_FAILURE,
    payload: error
});

export const changeCourier = (data) => async (dispatch) => {
    dispatch(changeCourierInDBPending());

    try {
        dispatch(changeCourierInDBSuccess([]));
    } catch (e) {
        console.log('error', e);
        dispatch(changeCourierInDBFailure(e.message));
    }
};


export const DELETE_COURIERS_IN_DB_PENDING = "DELETE::DELETE_COURIERS_IN_DB_PENDING"
export const DELETE_COURIERS_IN_DB_SUCCESS = "DELETE::DELETE_COURIERS_IN_DB_SUCCESS"
export const DELETE_COURIERS_IN_DB_FAILURE = "DELETE::DELETE_COURIERS_IN_DB_FAILURE"

export const deleteCourierInDBPending = () => ({
    type: DELETE_COURIERS_IN_DB_PENDING,
});
export const deleteCourierInDBSuccess = (data) => ({
    type: DELETE_COURIERS_IN_DB_SUCCESS,
    payload: data
});
export const deleteCourierInDBFailure = (error) => ({
    type: DELETE_COURIERS_IN_DB_FAILURE,
    payload: error
});


export const deleteCourier = (courier_id) => async (dispatch) => {
    dispatch(deleteCourierInDBPending());

    const data = {
        id: courier_id
    };

    try {
        dispatch(deleteCourierInDBSuccess(data));
    } catch (e) {
        console.log('error', e);
        dispatch(deleteCourierInDBFailure(e.message));
    }
};


export const REGISTER_COURIERS_IN_DB_PENDING = "COURIERS::REGISTER_COURIERS_IN_DB_PENDING"
export const REGISTER_COURIERS_IN_DB_SUCCESS = "COURIERS::REGISTER_COURIERS_IN_DB_SUCCESS"
export const REGISTER_COURIERS_IN_DB_FAILURE = "COURIERS::REGISTER_COURIERS_IN_DB_FAILURE"

export const registerCourierInDBPending = () => ({
    type: REGISTER_COURIERS_IN_DB_PENDING,
});
export const registerCourierInDBSuccess = (data) => ({
    type: REGISTER_COURIERS_IN_DB_SUCCESS,
    payload: data
});
export const registerCourierInDBFailure = (error) => ({
    type: REGISTER_COURIERS_IN_DB_FAILURE,
    payload: error
});
export const registerCourier = (name, surname, email, password)  => async (dispatch) => {

    dispatch(registerCourierInDBPending());

    const data = {
        name: name + " " + surname,
        email: email,
        password: password,
        coords: "55.6843,37.33855",
        user_status_id: 1,
        role_id: 1
    };

    try {
        dispatch(registerCourierInDBSuccess(data));
    } catch (e) {
        console.log('error', e);
        dispatch(registerCourierInDBFailure(e.message));
    }
};
