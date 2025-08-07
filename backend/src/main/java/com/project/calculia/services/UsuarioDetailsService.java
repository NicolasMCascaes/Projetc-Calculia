package com.project.calculia.services;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.project.calculia.models.Users;
import com.project.calculia.repository.UsersRepository;

@Service
public class UsuarioDetailsService implements UserDetailsService {

    private final UsersRepository usersRepository;

    public UsuarioDetailsService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = usersRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
        return User.builder()
                .username(user.getUsername())
                .password(user.getUserPassword())
                .roles("USER")
                .build();

    }

}
