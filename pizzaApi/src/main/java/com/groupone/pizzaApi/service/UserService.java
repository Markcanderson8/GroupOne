package com.groupone.pizzaApi.service;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers(User user);

    Optional<User> getUserById(Long id);

    User updateUser(Long id, User userDetails);

    void deleteUserById(Long id);
}
