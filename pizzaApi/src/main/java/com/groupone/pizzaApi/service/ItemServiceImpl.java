package com.groupone.pizzaApi.service;

import com.groupone.pizzaApi.entity.Item;
import com.groupone.pizzaApi.entity.User;
import com.groupone.pizzaApi.exceptions.BadDataResponse;
import com.groupone.pizzaApi.exceptions.ResourceNotFound;
import com.groupone.pizzaApi.exceptions.ServiceUnavailable;
import com.groupone.pizzaApi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import javax.naming.ServiceUnavailableException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService{
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item saveItem(Item item) {
        try {
            return itemRepository.save(item);
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }

    }

    @Override
    public Item getItemById(Long itemId) {
        try {
            Item item = itemRepository.findById(itemId).orElse(null);
            if(item != null) {
                return item;
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
        throw new ResourceNotFound("Could not locate an Item with the id: " + itemId);
    }

    @Override
    public List<Item> getAllItems(Item item) {
        try {
            if (item.isEmpty()) {
                return itemRepository.findAll();
            } else {
                Example<Item> ItemExample = Example.of(item);
                return itemRepository.findAll(ItemExample);
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
    }

    @Override
    public Item updateItem(Long itemId, Item item) {
        if (!item.getItemId().equals(itemId)) {
            throw new BadDataResponse("Item Id must match the Id specified in the URL");
        }
        try {
            Item itemFromDb = itemRepository.findById(itemId).orElse(null);

            if (itemFromDb != null) {
                return itemRepository.save(item);
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
        throw new ResourceNotFound("Could not locate an Item with the id: " + itemId);
    }

    @Override
    public void deleteItemById(Long itemId) {
        try {
            if(itemRepository.existsById(itemId)) {
                itemRepository.deleteById(itemId);
                return;
            }
        } catch (Exception e) {
            throw new ServiceUnavailable(e);
        }
        throw new ResourceNotFound("Could not locate an Item with the id: " + itemId);
    }
}
