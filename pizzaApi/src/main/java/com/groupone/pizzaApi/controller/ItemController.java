package com.groupone.pizzaApi.controller;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.service.ItemService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static com.groupone.pizzaApi.constants.StringConstants.*;

@RestController
@RequestMapping(CONTEXT_ITEMS)
public class ItemController {
    private final Logger logger = LoggerFactory.getLogger(ItemController.class);
    @Autowired
    private ItemService itemService;

    @PostMapping
    public ResponseEntity<Item> saveItem(@RequestBody Item item) {
        logger.info(new Date() + LOGGER_POST_REQUEST_RECEIVED + item.toString());
        return new ResponseEntity<>(itemService.saveItem(item), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Item>> getItemList(Item item) {
        logger.info(new Date() + LOGGER_POST_REQUEST_RECEIVED + item.toString());
        return new ResponseEntity<>(itemService.fetchItemList(item), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
        logger.info(new Date() + LOGGER_REQUEST_RECEIVED + id);
        return new ResponseEntity<>(itemService.getItemById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item item) {
        logger.info(new Date() + LOGGER_PUT_REQUEST_RECEIVED + id);
        return new ResponseEntity<>(itemService.updateItem(id, item), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteItem(@PathVariable Long id) {
        logger.info(new Date() + LOGGER_DELETE_REQUEST_RECEIVED + id);
        itemService.deleteItemById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
