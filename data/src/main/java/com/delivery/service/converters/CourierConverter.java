package com.delivery.service.converters;

import com.deliveryt.data.Courier;
import com.delivery.service.dto.CourierDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CourierConverter {

  public CourierDto toDto(Courier courier) {
    CourierDto courierDto = new CourierDto();
    courierDto.setId(courier.getId());
    courierDto.setName(courier.getName());
    courierDto.setDescription(courier.getDescription());
    courierDto.setStatus(courier.getStatus());
    courierDto.setCoordinates(courier.getCoordinates());
    return courierDto;
  }

  public Courier toEntity(CourierDto courierDto) {
    Courier courier = new Courier();
    courier.setId(courierDto.getId());
    courier.setName(courierDto.getName());
    courier.setDescription(courierDto.getDescription());
    courier.setStatus(courierDto.getStatus());
    courier.setCoordinates(courierDto.getCoordinates());
    return courier;
  }
}
