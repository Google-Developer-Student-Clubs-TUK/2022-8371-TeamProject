package com.gdsc.be8371.global.exception;

import lombok.Getter;

public class FreeBoardException extends RuntimeException {
    @Getter
    private BaseExceptionType exceptionType;

    public FreeBoardException(BaseExceptionType exceptionType){
        super(exceptionType.getErrorMessage());
        this.exceptionType = exceptionType;
    }
}
