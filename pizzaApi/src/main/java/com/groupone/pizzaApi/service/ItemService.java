package com.groupone.pizzaApi.service;

import com.groupone.pizzaApi.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    Item saveItem(Item item);

    List<Item> fetchItemList(Item item);

    Item getItemById(Long itemId);

    Item updateItem(Long itemId, Item itemDetails);

    void deleteItemById(Long itemId);
}
