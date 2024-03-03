package com.delivery.rest;

import com.delivery.security.JwtTokenProvider;
import com.delivery.service.UserService;
import com.delivery.service.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    // Создать пользователя
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody UserDto userDto) {
        UserDto createdUser = userService.createUser(userDto);
        return ResponseEntity.ok(createdUser);
    }

    // Получить информацию о пользователе по id
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long userId) {
        UserDto user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    // Авторизовать пользователя
    @PostMapping("/auth")
    public ResponseEntity<?> authUser(@RequestBody AuthRequest authRequest) {
        UserDto user = userService.authUser(authRequest.getLogin(), authRequest.getPassword());
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid credentials!");
        }

        String token = jwtTokenProvider.createToken(user.getLogin());
        return ResponseEntity.ok(new AuthResponse(token));
    }

    // Зарегистрировать пользователя
    @PostMapping("/registrate")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        UserDto user = userService.registrateUser(registrationRequest);
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid fields!");
        }
        String token = jwtTokenProvider.createToken(user.getLogin());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}

