package com.delivery.service;
import com.delivery.service.dto.OrderDto;

import java.util.List;


public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);
    OrderDto deleteOrder (Long ordertId);
    OrderDto getOrderById(Long ordertId);
    List<OrderDto> getCourierOrders(Long courierID);
    List<OrderDto> getListOrdersByStatus(String status);
    OrderDto updateOrder(Long orderID, OrderDto orderDto);
}
