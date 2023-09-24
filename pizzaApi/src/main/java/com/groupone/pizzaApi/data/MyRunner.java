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

    List<Item> items = new ArrayList<>();

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

    String pepperoniImg = "https://storage.googleapis.com/pizzafrontend1/pepperonif.png";
    String cheeseImg = "https://storage.googleapis.com/pizzafrontend1/cheesef.png";
    String pineappleImg = "";
    String veganImg = "https://storage.googleapis.com/pizzafrontend1/veganpizzaf.png";
    String sausage = "https://storage.googleapis.com/pizzafrontend1/sausagef.png";
    String pepsiImg = "https://www.meijer.com/content/dam/meijer/product/0012/00/0002/30/0012000002304_a1c1_0600.png";
    String spriteImg = "https://www.meijer.com/content/dam/meijer/product/0049/00/0050/15/0049000050158_a1c1_0600.png";
    String fantaImg = "https://www.meijer.com/content/dam/meijer/product/0004/90/0005/02/0004900005025_2_A1C1_0600.png";
    String drPepperImg = "https://www.meijer.com/content/dam/meijer/product/0078/00/0082/46/0078000082463_0_A1C1_0600.jpg";
    String cokeImg = "https://www.meijer.com/content/dam/meijer/product/0004/90/0005/01/0004900005010_2_A1C1_0600.png";
    String supremeImg = "https://storage.googleapis.com/pizzafrontend1/supremef1.png";
    String cheerWine = "";

    @Override
    public void run(String... args) throws Exception {

        loadUsers();
        loadItems();

        logger.info("# of items: {}", itemRepository.count());
        logger.info("# of users: {}", userRepository.count());

        logger.info("Data loaded...You can now start making requests");
    }

    private void loadItems() {
        item1 = new Item("Supreme", "7.99", "12\"", supremeImg, user1);
        item2 = new Item("Cheese", "5.99", "12\"", cheeseImg, user2);
        item3 = new Item("Pepperoni", "6.99", "12\"", pepperoniImg);
        item4 = new Item("Sausage", "6.99", "12\"", sausage, user3);
        item5 = new Item("Pepsi", "2.99", "2L", pepsiImg,user3);
        item6 = new Item("Vegan", "8.99", "12\"", veganImg);
        item7 = new Item("Dr. Pepper", "2.99", "2L", drPepperImg);
        item8 = new Item("Sprite", "2.99", "2L", spriteImg);
        item9 = new Item("Fanta", "2.99", "2L", fantaImg, user1);
        item10 = new Item("Coke", "2.99", "2L", cokeImg, user2);
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
        user1 = new User("mark", "anderson", "864-637-9485", "mark@gmail.com", "admin", "pass123");
        user2 = new User("maddy", "anderson", "864-555-2354", "chance@gmail.com", "user", "maddy123");
        user3 = new User("chance",  "anderson", "864-952-9902", "maddy@gmail.com", "user", "chance323");
        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);
    }
}
