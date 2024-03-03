import {REQUEST_STATUS} from "../../utils/constants";

export const selectCouriers = (state) => state.couriers.couriers.filter((courier) => {
    return courier.is_deleted !== 1;
});

export const selectRegisterLoading = (state) => state.couriers.request.status === REQUEST_STATUS.PENDING;

export const selectCurrentCourier = (state, courierID) => {
    //  console.log('selectCurrentCourier', courierID, state)
    const couriers = state.couriers.couriers;

    if (courierID === 'undefined' || courierID === '') {
        return ''
    } else {
        return couriers.filter(item => {
             console.log('item2', item)
            return item.id === courierID
        })
    }
};

export const selectCouriersByStatus = (state, status_id) => {
    const couriers = state.couriers.couriers;
    console.log('couselectCouriersByStatusriers', couriers, status_id)
    const filterCouriers =  couriers.filter((courier) => {
        // return (courier.user_status_id === status_id && courier.is_deleted !== 1);
        if (status_id === 1) {
            return (courier.status === 'work' && courier.is_deleted !== 1);
        }
        if (status_id === 2) {
            return (courier.status === 'online' && courier.is_deleted !== 1);
        }
        if (status_id === 3) {
            return (courier.status === 'offline' && courier.is_deleted !== 1);
        }
    })
    return filterCouriers
};

export const selectRequestCouriers = (state) => {
    return state.couriers.request
};

