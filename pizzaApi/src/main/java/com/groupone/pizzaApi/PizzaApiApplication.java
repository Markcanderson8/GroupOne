package com.groupone.pizzaApi;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.repository.ItemRepository;
import org.apache.logging.log4j.LogManager;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class PizzaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PizzaApiApplication.class, args);
	}

}
