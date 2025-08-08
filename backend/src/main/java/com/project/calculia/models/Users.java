package com.project.calculia.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usersCalculia")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long IdUsers;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String userPassword;

    public Users(String username, String userPassword) {
        this.username = username;
        this.userPassword = userPassword;
    }

    public Users() {

    }

    public long getIdUsers() {
        return IdUsers;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

}
