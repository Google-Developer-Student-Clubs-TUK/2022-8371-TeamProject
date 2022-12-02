package com.gdsc.be8371.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.Column;
import java.sql.Date;

@AllArgsConstructor
@Builder
@Getter
@ToString
public class EventRequestDTO {
    private String title;
    private String content;
    private String category;
    private float latitude;
    private float longitude;
}
