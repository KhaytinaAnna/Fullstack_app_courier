package com.delivery.service.api;

import com.delivery.service.dto.RoleDto;

public interface RoleService {
    RoleDto createRole(RoleDto roleDto);
    boolean saveRole(RoleDto role);

    RoleDto getRoleById(Long roleId);
    RoleDto getRoleByName(String roleName);
}
