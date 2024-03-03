package com.delivery.service;

import com.delivery.service.dto.AuthRequest;
import com.delivery.service.dto.AuthResponse;

public interface AuthenticationService {
    AuthResponse authenticateUser(AuthRequest authRequest);
}

