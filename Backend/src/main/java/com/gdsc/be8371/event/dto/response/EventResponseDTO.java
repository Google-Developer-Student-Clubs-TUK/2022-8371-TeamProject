package com.gdsc.be8371.event.dto.response;

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
public class EventResponseDTO {
    private Integer id;
    private String title;
    private String content;
    private String category;
    private float latitude;
    private float longitude;
    private int checkNum;
    private Date createdAt;
    private Date deadLine;
}
