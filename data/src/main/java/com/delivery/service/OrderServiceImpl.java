package com.delivery.service;

import com.delivery.data.Order;
import com.delivery.data.repo.OrderRepository;
import com.delivery.service.api.OrderService;
import com.delivery.service.converters.OrderConverter;
import com.delivery.service.dto.OrderDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final OrderConverter orderConverter;

    @Override
    public OrderDto createOrder(OrderDto orderDto) {
        Order order = orderConverter.toEntity(orderDto);
        Order savedOrder = orderRepository.save(order);
        return orderConverter.toDto(savedOrder);
    }

    @Override
    public OrderDto getOrderById(Long orderID) {
        Order order = orderRepository.findById(orderID).orElse(null);
        if (order == null) {
            return null;
        }
        return orderConverter.toDto(order);
    }

    @Override
    public OrderDto updateOrder(Long orderID, OrderDto orderDto) {
        Order existingOrder = orderRepository.findById(orderId).orElse(null);
        if (existingOrder == null) {
            return null;
        }

        existingOrder.setCourierID(orderDto.getCourierID());
        existingOrder.setStatus(orderDto.getStatus());

        Order updatedOrder = orderRepository.save(existingOrder);
        return orderConverter.toDto(updatedOrder);
    }

    @Override
    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }

    @Override
    public List<OrderDto> getListOrdersByStatus(String status) {
        List<Order> listOrders = orderRepository.findByStatus(status);
        return listOrders.stream()
            .map(orderConverter::toDto)
            .toList();
    }
    
    @Override
    public List<OrderDto> getCourierOrders(Long courierID) {
        List<Order> listOrders = orderRepository.findByCourierId(courierID);
        return listOrders.stream()
            .map(orderConverter::toDto)
            .toList();
    }
}
