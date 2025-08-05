package com.project.calculia.services;

import java.lang.classfile.ClassFile.Option;
import java.util.Optional;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.calculia.models.Users;
import com.project.calculia.repository.UsersRepository;

@Service
public class UsersService {
    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public Users registerUser(String username, String password) {
        String encodedPassword = passwordEncoder.encode(password);
        Users user = new Users(username, encodedPassword);
        return usersRepository.save(user);
    }

    public Optional<Users> buscarPorUsername(String username) {
        return usersRepository.findByUsername(username);
    }

}
