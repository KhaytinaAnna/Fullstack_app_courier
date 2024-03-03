import * as React from "react";
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectDeliveredOrdersForCourier} from "../../store/orders/selector";
import CourierHistory from "../CourierHistory/CourierHistory";
import {getOrders} from "../../store/orders/actions";
import {getCouriers} from "../../store/couriers/actions";
import CourierMain from "../CourierMain/CourierMain";
import {selectCurrentCourier} from "../../store/couriers/selector";
import CouriersPageHeader from "../CouriersPageHeader/CouriersPageHeader";

const CouriersPage = () => {

    const dispatch = useDispatch();

    useEffect((event) => {
        dispatch(getOrders());
        dispatch(getCouriers());
    }, []);

    const courierID = +localStorage.getItem('id_user');
    console.log('!!!!!!',courierID)
    const currentCourier = useSelector((state) => selectCurrentCourier(state, courierID));
    const deliveredOrders = useSelector((state) => selectDeliveredOrdersForCourier(state, courierID));
   // console.log('courier',  courierID, currentCourier, deliveredOrders)


    return (
        <>
            <CouriersPageHeader currentCourier={currentCourier[0]}/>
            <Routes>
                <Route index element={<CourierMain/>}/>
                <Route path="CourierHistory" element={<CourierHistory orders={deliveredOrders}/>}/>
            </Routes>
        </>
    );
};

export default CouriersPage;