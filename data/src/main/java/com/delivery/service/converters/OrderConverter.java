package com.delivery.service.converters;

import com.deliveryt.data.Order;
import com.delivery.service.dto.OrderDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OrderConverter {

  private final CourierConverter courierConverter;

  public OrderDto toDto(Order order) {
    OrderDto orderDto = new OrderDto();
    orderDto.setId(order.getId());
    orderDto.setName(order.getName());
    orderDto.setDescription(order.getDescription());
    orderDto.setStatus(order.getStatus());
    orderDto.setCourierID(order.getCourierID());
    orderDto.setCourier(courierConverter.toDto(courier.getCourier()));
    return orderDto;
  }

  public Order toEntity(OrderDto orderDto) {
    Order order = new Order();
    order.setId(orderDto.getId());
    order.setCourierID(orderDto.getCourierID());
    order.setDescription(orderDto.getDescription());
    order.setStatus(orderDto.getStatus());
    order.setName(orderDto.setName());
    order.setCourier(courierConverter.toEntity(orderDto.getCourier()));
    return order;
  }
}
