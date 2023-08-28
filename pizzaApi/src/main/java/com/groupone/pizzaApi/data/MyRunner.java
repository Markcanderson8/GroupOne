package com.groupone.pizzaApi.data;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.entity.User;
import com.groupone.pizzaApi.repository.ItemRepository;
import com.groupone.pizzaApi.repository.UserRepository;
import org.aspectj.weaver.ast.Or;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class MyRunner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(MyRunner.class);

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ItemRepository itemRepository;

    Item item1;
    Item item2;
    Item item3;
    Item item4;
    Item item5;
    Item item6;
    Item item7;
    Item item8;
    Item item9;
    Item item10;

    User user1;
    User user2;
    User user3;


    @Override
    public void run(String... args) throws Exception {

        loadUsers();
        loadItems();

        logger.info("# of items: {}", itemRepository.count());
        logger.info("# of users: {}", userRepository.count());

        logger.info("Data loaded...You can now start making requests");
    }

    private void loadItems() {
        item1 = new Item("Supreme", "7.99", "12", user1);
        item2 = new Item("Cheese", "5.99", "12", user2);
        item3 = new Item("Pepperoni", "6.99", "12");
        item4 = new Item("Pineapple", "6.99", "12", user3);
        item5 = new Item("Pepsi", "2.99", "2L", user3);
        item6 = new Item("Vegan", "8.99", "12");
        item7 = new Item("Dr. Pepper", "2.99", "2L");
        item8 = new Item("Sprite", "2.99", "2L");
        item9 = new Item("Cheerwine", "2.99", "2L", user1);
        item10 = new Item("Fanta", "2.99", "2L", user2);
        itemRepository.save(item1);
        itemRepository.save(item2);
        itemRepository.save(item3);
        itemRepository.save(item4);
        itemRepository.save(item5);
        itemRepository.save(item6);
        itemRepository.save(item7);
        itemRepository.save(item8);
        itemRepository.save(item9);
        itemRepository.save(item10);
    }

    private void loadUsers() {
        user1 = new User("mark", "anderson", "864-637-9485", "mark@gmail.com", "admin");
        user2 = new User("chance", "anderson", "864-555-2354", "chance@gmail.com", "user");
        user3 = new User("maddy", "anderson", "864-952-9902", "maddy@gmail.com", "user");
        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);
    }


}
