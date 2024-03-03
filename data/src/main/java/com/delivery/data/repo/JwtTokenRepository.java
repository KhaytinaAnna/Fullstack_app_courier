package com.delivery.data.repo;

import com.delivery.data.JwtToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JwtTokenRepository extends JpaRepository<JwtToken, Long> {
    JwtToken findByToken(String token);
}
