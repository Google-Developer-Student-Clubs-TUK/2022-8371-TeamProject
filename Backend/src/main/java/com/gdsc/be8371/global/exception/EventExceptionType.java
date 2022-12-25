package com.gdsc.be8371.global.exception;

import lombok.Getter;

@Getter
public enum EventExceptionType implements BaseExceptionType{
    NULL_PLACE_VALUE(1001, 400, "위도 혹은 경도 값이 없습니다.");

    private int errorCode;
    private int httpStatus;
    private String errorMessage;

    EventExceptionType(int errorCode, int httpStatus, String errorMessage) {
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.errorMessage = errorMessage;
    }
}
