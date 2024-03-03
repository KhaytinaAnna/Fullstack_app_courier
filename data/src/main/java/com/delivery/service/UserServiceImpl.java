package com.delivery.service;

import com.delivery.data.User;
import com.delivery.data.repo.UserRepository;
import com.delivery.service.api.UserService;
import com.delivery.service.converters.UserConverter;
import com.delivery.service.dto.RoleDto;
import com.delivery.service.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserConverter userConverter;
//    @Autowired
//    PasswordEncoder passwordEncoder;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = userConverter.toEntity(userDto);
        User savedUser = userRepository.save(user);
        return userConverter.toDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        return userConverter.toDto(user);
    }

    @Override
    public UserDto getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return userConverter.toDto(user);
    }


    @Override
    public UserDto updateUser(Long userId, UserDto userDto) {
        User existingUser = userRepository.findById(userId).orElse(null);
        if (existingUser == null) {
            return null;
        }

        existingUser.setName(userDto.getName());
        existingUser.setSurname(userDto.getSurname());
        existingUser.setUsername(userDto.getUsername());
        existingUser.setEmail(userDto.getEmail());

        User updatedUser = userRepository.save(existingUser);
        return userConverter.toDto(updatedUser);
    }

    @Override
    public boolean saveUser(UserDto user) {
        User userFromDB = userRepository.findByEmail(user.getEmail());

        if (userFromDB != null) {
            return false;
        }

        UserDto newUser = new UserDto();
        newUser.setId(user.getId());
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        newUser.setRoles(user.getRoles());

        encodePassword(newUser, user);
        userRepository.save(userConverter.toEntity(newUser));

        return true;
    }
    
    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepository.findAll()
            .stream()
            .map(userConverter::toDto)
            .toList();
    }

    @Override
    public UserDto authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return null;
        }

        if (user.getPassword().equals(password)) {
            return userConverter.toDto(user);
        }

        return null;
    }

    private void encodePassword(UserDto newUser, UserDto user){
        newUser.setPassword(user.getPassword());
    }
}
