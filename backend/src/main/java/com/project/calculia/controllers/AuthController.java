package com.project.calculia.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.calculia.dto.DtoResponseUser;
import com.project.calculia.dto.UserDTO;
import com.project.calculia.models.Users;
import com.project.calculia.security.JwtUtil;
import com.project.calculia.services.UsersService;

import jakarta.validation.Valid;

import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UsersService usersService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UsersService usersService, PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
        this.usersService = usersService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> userRegister(@RequestBody @Valid UserDTO request) {
        Users users = usersService.registerUser(request);
        DtoResponseUser response = new DtoResponseUser(request.getUsername());
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        Optional<Users> user = usersService.buscarPorUsername(request.get("username"));
        if (user.isPresent() && passwordEncoder.matches(request.get("password"), user.get().getUserPassword())) {
            String token = JwtUtil.generateToken(user.get().getUsername());
            return ResponseEntity.ok(Map.of("token", token));
        }

        return ResponseEntity.status(401).body("Credenciais inválidas");
    }

}
