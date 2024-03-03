package com.delivery.service.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDto {
    private Long id;
    private Long courierID;
    private String name;
    private String description;
    private String status;
    //private DateTime deliveryDatetime;
}