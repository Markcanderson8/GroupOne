package com.groupone.pizzaApi.exceptions;

public class ResourceNotFound extends RuntimeException {
    public ResourceNotFound() {
    }

    public ResourceNotFound(String message) {
        super(message);
    }
}
