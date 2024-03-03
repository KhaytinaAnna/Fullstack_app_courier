package com.delivery.data;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name="User")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String email;
    private String password;
}
