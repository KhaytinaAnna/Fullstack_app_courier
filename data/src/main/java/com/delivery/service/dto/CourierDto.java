package com.delivery.service.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourierDto {
    private Long id;
    private String name;
    private String description;
    private String status;
    private String coordinates; // [55.4, 37.9]
}