package com.groupone.pizzaApi.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;
import java.util.List;
import java.util.ResourceBundle;

import static com.groupone.pizzaApi.constants.StringConstants.NOT_FOUND;
import static com.groupone.pizzaApi.constants.StringConstants.SERVER_ERROR;

@ControllerAdvice
public class ExceptionController {
    @ExceptionHandler(ResourceNotFound.class)
    protected ResponseEntity<ExceptionResponse> resourceNotFound(ResourceNotFound exception) {
        ExceptionResponse response =
                new ExceptionResponse(NOT_FOUND, new Date(), exception.getMessage());

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ServiceUnavailable.class)
    protected ResponseEntity<ExceptionResponse> serverError(ServiceUnavailable exception) {
        ExceptionResponse response =
                new ExceptionResponse(SERVER_ERROR, new Date(), exception.getMessage());

        return new ResponseEntity<>(response, HttpStatus.SERVICE_UNAVAILABLE);
    }

    private String parseMessage(MethodArgumentNotValidException ex) {
        List<FieldError> errors = ex.getBindingResult().getFieldErrors();
        StringBuilder message = new StringBuilder();
        for (FieldError err : errors) {
            message.append(err.getDefaultMessage());
            message.append(" ");
        }
        return message.toString().trim();
    }
}
