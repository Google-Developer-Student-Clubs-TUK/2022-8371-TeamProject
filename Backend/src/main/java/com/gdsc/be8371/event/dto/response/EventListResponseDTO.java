package com.gdsc.be8371.event.dto.response;

import lombok.*;

import java.net.URL;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Builder
@Getter
@ToString
public class EventListResponseDTO{
    private Integer id;
    private String title;
    private String content;
    private String category;
    private float latitude;
    private float longitude;
    private int checkNum;
    private List<URL> images;
    private LocalDateTime createdAt;
    private int deadLine;

}
