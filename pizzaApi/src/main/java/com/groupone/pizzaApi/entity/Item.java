package com.groupone.pizzaApi.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Objects;

@Entity
@Table(name = "items")
public class Item implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;
    @Column(name = "item_name")
    private String itemName;
    @Column(name = "item_price")
    private String itemPrice;
    @Column(name = "item_size")
    private String itemSize;
    @Column(name = "item_img")
    private String itemImg;

    @Column(name = "quantity")
    private int quantity;

    @JoinColumn(name = "user_id")
    @ManyToOne
    private User user;

    public Item() {}

    public Item(Long itemId, String itemName, String itemPrice, String itemSize) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemSize = itemSize;
    }

    public Item(String itemName, String itemPrice, String itemSize, String itemImg, int quantity,  User user) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemSize = itemSize;
        this.itemImg = itemImg;
        this.quantity = quantity;
        this.user = user;
    }

    public Item(String itemName, String itemPrice, String itemSize, String itemImg, int quantity) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemSize = itemSize;
        this.itemImg = itemImg;
        this.quantity = quantity;
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(String itemPrice) {
        this.itemPrice = itemPrice;
    }

    public String getItemSize() {
        return itemSize;
    }

    public void setItemSize(String itemSize) {
        this.itemSize = itemSize;
    }

    public String getItemImg() {
        return itemImg;
    }

    public void setItemImg(String itemImg) {
        this.itemImg = itemImg;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @JsonIgnore
    public boolean isEmpty() {
        return Objects.isNull(itemId) &&
                Objects.isNull(itemName) &&
                Objects.isNull(itemPrice) &&
                Objects.isNull(itemSize) &&
                Objects.isNull(quantity) &&
                Objects.isNull(user);
    }

    @Override
    public String toString() {
        return "Item{" +
                "itemId=" + itemId +
                ", itemName='" + itemName + '\'' +
                ", itemPrice='" + itemPrice + '\'' +
                ", itemSize='" + itemSize + '\'' +
                ", itemImg='" + itemImg + '\'' +
                ", quantity=" + quantity +
                ", user=" + user +
                '}';
    }
}
