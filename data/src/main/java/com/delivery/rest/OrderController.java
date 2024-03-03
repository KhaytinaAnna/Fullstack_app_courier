package com.delivery.rest;

import java.util.List;

import com.delivery.service.OrderService;
import com.delivery.service.dto.OrderDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    // Создать заказ
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderDto orderDto) {
        OrderDto order = orderService.createOrder(orderDto);
        return ResponseEntity.ok(order);
    }

    // Удалить заказ по его id
    @DeleteMapping("/{orderId}")
    public ResponseEntity<OrderDto> deleteOrder(@PathVariable Long orderId) {
        OrderDto orderDto = orderService.deleteOrder(orderId);
        return ResponseEntity.ok(orderDto);
    }

    // Получить заказы конкретного курьера
    @GetMapping("/{courierID}")
    public ResponseEntity<List<OrderDto>> getCourierOrders(@PathVariable Long courierID) {
        List<OrderDto> orders = orderService.getCourierOrders(courierID);
        return ResponseEntity.ok(orders);
    }

    // Получить список заказов
    @GetMapping("/")
    public ResponseEntity<List<OrderDto>> getListOrders() {
        List<OrderDto> orders = orderService.getListOrders();
        return ResponseEntity.ok(orders);
    }

    // Получить заказ по id
    @GetMapping("/{orderId}")
    public ResponseEntity<OrderDto> getOrderById(@PathVariable Long orderId) {
        OrderDto order = orderService.getOrderById(orderId);
        return ResponseEntity.ok(order);
    }

    // Назначить курьера на заказ
    @PostMapping("/{orderId}/add/{courierID}")
    public ResponseEntity<OrderDto> updateCourier(@PathVariable Long orderId, @PathVariable Long courierID) {
        OrderDto updatedOrder = orderService.updateCourier(orderId, courierID);
        return ResponseEntity.ok(updatedOrder);
    }
}
