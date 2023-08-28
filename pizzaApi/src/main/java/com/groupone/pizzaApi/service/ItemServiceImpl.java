package com.groupone.pizzaApi.service;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import javax.naming.ServiceUnavailableException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService{
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Optional<Item> getItemById(Long itemId) {
        return itemRepository.findById(itemId);
    }

    @Override
    public List<Item> fetchItemList(Item item) {
        if(item.isEmpty()) {
            return itemRepository.findAll();
        } else {
            Example<Item> ItemExample = Example.of(item);
            return itemRepository.findAll(ItemExample);
        }
    }

    @Override
    public Item updateItem(Long itemId, Item itemDetails) {
        Optional<Item> item = itemRepository.findById(itemId);

        if(item.isPresent()) {
            Item existingItem = item.get();
            existingItem.setItemName(itemDetails.getItemName());
            existingItem.setItemSize(itemDetails.getItemSize());
            existingItem.setItemPrice(itemDetails.getItemPrice());
            return itemRepository.save(existingItem);
        }
        return null;
    }

    @Override
    public void deleteItemById(Long itemId) {
        itemRepository.deleteById(itemId);
    }
}
