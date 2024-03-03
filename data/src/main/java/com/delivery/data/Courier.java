package com.delivery.data;

import org.springframework.data.annotation.Id;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name="Courier")
@Getter
@Setter
public class Courier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String status;
    private String coordinates; // [55.4, 37.9]
        
    @OneToMany
    private List<Order> orders;
}
