package com.delivery.data;

import org.springframework.data.annotation.Id;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name="Order")
@Getter
@Setter
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long courierID;
    private String name;
    private String description;
    private String status;

    @OneToOne
    private Courier courier;
}
