package com.groupone.pizzaApi.exceptions;

import java.util.Date;

public class ExceptionResponse {
    private Date timestamp;
    private String error;
    private String errorMessage;

    public ExceptionResponse() {
    }

    public ExceptionResponse(String error, Date timestamp, String errorMessage) {
        this.error = error;
        this.timestamp = timestamp;
        this.errorMessage = errorMessage;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
