package com.groupone.pizzaApi.controller;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.entity.User;
import com.groupone.pizzaApi.service.ItemService;
import com.groupone.pizzaApi.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.image.RescaleOp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static com.groupone.pizzaApi.constants.StringConstants.*;

@RestController
@RequestMapping(CONTEXT_USERS)
public class UserController {

    private final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        logger.info(new Date() + LOGGER_POST_REQUEST_RECEIVED + user.toString());
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<User>> getUserList(User user) {
        logger.info(new Date() + LOGGER_REQUEST_RECEIVED + user.toString());
        return new ResponseEntity<>(userService.getAllUsers(user), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        logger.info(new Date() + LOGGER_REQUEST_RECEIVED + id);
        return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        logger.info(new Date() + LOGGER_PUT_REQUEST_RECEIVED + id);
        return new ResponseEntity<>(userService.updateUser(id, user), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) {
        logger.info(new Date() + LOGGER_DELETE_REQUEST_RECEIVED + id);
        userService.deleteUserById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
