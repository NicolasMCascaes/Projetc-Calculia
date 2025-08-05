package com.project.calculia.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.calculia.models.Users;
import com.project.calculia.services.UsersService;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    public ResponseEntity<?> userRegister(@RequestBody Map<String, String> request) {
        Users users = usersService.registerUser(request.get("username"), request.get("password"));
        return ResponseEntity.ok(users);
    }

    @PostMapping("/login")
    public String postMethodName(@RequestBody String entity) {
        // TODO: process POST request

        return entity;
    }

}
