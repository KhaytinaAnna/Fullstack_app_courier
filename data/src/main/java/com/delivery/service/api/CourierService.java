package com.delivery.service;
import com.delivery.service.dto.CourierDto;

import java.util.List;


public interface CourierService {
    CourierDto registerCourier(CourierDto courierDto);
    CourierDto deleteCourier (Long courierID);
    CourierDto updateCourier(Long courierID);
    CourierDto getCourierById(Long courierID);
    List<CourierDto> getListCouriersByStatus(String status);
}
