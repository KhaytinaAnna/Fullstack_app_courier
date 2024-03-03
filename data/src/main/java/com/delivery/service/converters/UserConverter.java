package com.delivery.service.converters;

import com.delivery.data.Role;
import com.delivery.data.User;
import com.delivery.service.dto.RoleDto;
import com.delivery.service.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@RequiredArgsConstructor
public class UserConverter {

    public UserDto toDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setName(user.getName());
        userDto.setSurname(user.getSurname());
        userDto.setPassword(user.getPassword());

        ArrayList<RoleDto> roles = new ArrayList<RoleDto>();
        for (Role role : user.getRoles()) {
            RoleDto newRole = new RoleDto();
            newRole.setId(role.getId());
            newRole.setName(role.getName());

            roles.add(newRole);
        }
        userDto.setRoles(roles.stream().toList());

        return userDto;
    }

    public User toEntity(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getId());
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setName(userDto.getName());
        user.setSurname(userDto.getSurname());
        user.setPassword(userDto.getPassword());

        ArrayList<Role> roles = new ArrayList<Role>();
        for (RoleDto role : userDto.getRoles()) {
            Role newRole = new Role();
            newRole.setId(role.getId());
            newRole.setName(role.getName());

            roles.add(newRole);
        }
        user.setRoles(roles.stream().toList());

        return user;
    }
}