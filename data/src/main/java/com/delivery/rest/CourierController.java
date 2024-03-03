package com.delivery.rest;

import java.util.List;

import com.delivery.service.CourierService;
import com.delivery.service.OrderService;
import com.delivery.service.dto.CourierDto;
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
@RequestMapping("/couriers")
@RequiredArgsConstructor
public class CourierController {
    private final CourierService courierService;

    // Зарегистрировать курьерв
    @PostMapping
    public ResponseEntity<CourierDto> registerCourier(@RequestBody CourierDto courierDto) {
        CourierDto courier = courierService.registerCourier(courierDto);
        return ResponseEntity.ok(courier);
    }

    // Удалить курьерв по его id
    @DeleteMapping("/{courierID}")
    public ResponseEntity<CourierDto> deleteCourier(@PathVariable Long courierID) {
        CourierDto courierDto = courierService.deleteCourier(courierID);
        return ResponseEntity.ok(courierDto);
    }

    // Получить конкретного курьера
    @GetMapping("/{courierID}")
    public ResponseEntity<CourierDto> getCourierById(@PathVariable Long courierID) {
        CourierDto courier = courierService.getCourierById(courierID);
        return ResponseEntity.ok(courier);
    }

    // Получить список курьеров по статусу
    @GetMapping("/{status}")
    public ResponseEntity<List<CourierDto>> getListCouriersByStatus() {
        List<CourierDto> couriers = courierService.getListCouriersByStatus();
        return ResponseEntity.ok(couriers);
    }
}
