package com.delivery.service.api;

import com.delivery.service.dto.JwtTokenDto;

public interface JwtTokenService {
    JwtTokenDto createToken(JwtTokenDto tokenDto);
    boolean saveToken(JwtTokenDto token);

    JwtTokenDto getTokenById(Long id);
    JwtTokenDto getTokenByName(String token);
    boolean deleteById(Long id);
}
