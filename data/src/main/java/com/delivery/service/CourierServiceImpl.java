package com.delivery.service;

import com.delivery.data.Courier;
import com.delivery.data.repo.CourierRepository;
import com.delivery.service.api.CourierService;
import com.delivery.service.converters.CourierConverter;
import com.delivery.service.dto.CourierDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourierServiceImpl implements CourierService {

    private final CourierRepository courierRepository;
    private final CourierConverter courierConverter;

    @Override
    public CourierDto registerCourier(CourierDto courierDto) {
        Courier courier = courierConverter.toEntity(courierDto);
        Courier savedCourier = courierRepository.save(courier);
        return courierConverter.toDto(savedCourier);
    }

    @Override
    public CourierDto getCourierById(Long courierID) {
        Courier courier = courierRepository.findById(courierID).orElse(null);
        if (courier == null) {
            return null;
        }
        return courierConverter.toDto(courier);
    }

    @Override
    public CourierDto updateCourier(Long courierID, CourierDto courierDto) {
        Courier existingCourier = courierRepository.findById(courierId).orElse(null);
        if (existingCourier == null) {
            return null;
        }

        existingCourier.setName(courierDto.getName());
        existingCourier.setDescription(courierDto.getDescription());
        existingCourier.setStatus(courierDto.getStatus());
        existingCourier.setCoordinates(courierDto.getCoordinates());

        Courier updatedCourier = courierRepository.save(existingCourier);
        return courierConverter.toDto(updatedCourier);
    }

    @Override
    public void deleteCourier(Long courierId) {
        courierRepository.deleteById(courierId);
    }

    @Override
    public List<CourierDto> getListCouriersByStatus(String status) {
        List<Courier> listCouriers = courierRepository.findByStatus(status);
        return listCouriers.stream()
            .map(courierConverter::toDto)
            .toList();
    }
}
