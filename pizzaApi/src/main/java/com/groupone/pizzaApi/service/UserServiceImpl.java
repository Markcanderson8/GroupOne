package com.groupone.pizzaApi.service;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.entity.User;
import com.groupone.pizzaApi.exceptions.BadDataResponse;
import com.groupone.pizzaApi.exceptions.ResourceNotFound;
import com.groupone.pizzaApi.exceptions.ServiceUnavailable;
import com.groupone.pizzaApi.repository.ItemRepository;
import com.groupone.pizzaApi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    ItemService itemService;

    @Override
    public User saveUser(User user) {
        user.setRole("user");
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
    }

    @Override
    public List<User> getAllUsers(User user) {
        try {
            if(user.isEmpty()) {
                return userRepository.findAll();
            } else {
                Example<User> UserExample = Example.of(user);
                return userRepository.findAll(UserExample);
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
    }

    @Override
    public User getUserById(Long id) {
        try {
            User user = userRepository.findById(id).orElse(null);
            if (user != null) {
                return user;
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
        throw new ResourceNotFound("Could not locate a User with the id: " + id);
    }

    @Override
    public User updateUser(Long id, User user) {
        if(!user.getId().equals(id)) {
            throw new BadDataResponse("User Id must match the Id specified in the URL");
        }
        try {
            User  userFromDb = userRepository.findById(id).orElse(null);

            if(userFromDb != null) {
                return userRepository.save(user);
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
        throw new ResourceNotFound("Could not locate a User with the id: " + id);
    }

    @Override
    public void deleteUserById(Long id) {
        try {
            if(userRepository.existsById(id)) {
                userRepository.deleteById(id);
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
        throw new ResourceNotFound("Could not locate a User with the id: " + id);
    }
}
