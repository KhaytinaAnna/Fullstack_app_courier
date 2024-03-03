import {Route, Routes} from "react-router-dom";
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getOrders} from "../../store/orders/actions";
import {selectCouriers} from "../../store/couriers/selector";
import {selectOrders} from "../../store/orders/selector";
import {getCouriers} from "../../store/couriers/actions";

import {Dashboard} from "./Dashboard";
import {Statistic} from "./Statistic";
import {MenuChiefPageHeader} from "./MenuChiefPageHeader";

export const ChiefAnalytics = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getCouriers());
    }, [dispatch]);

    const orders = useSelector(selectOrders)
    const couriers = useSelector(selectCouriers)

    return (
        <>
            <MenuChiefPageHeader/>
            <Routes>
                <Route index element={<Dashboard orders={orders} couriers={couriers}/>}/>
                <Route path="statistic" element={<Statistic orders={orders} couriers={couriers}/>}/>
            </Routes>
        </>
    )
}
