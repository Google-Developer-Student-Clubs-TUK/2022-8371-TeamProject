package com.gdsc.be8371.event.dto.response;

import com.gdsc.be8371.event.entity.Image;
import lombok.*;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Builder
@Getter
@ToString
public class EventResponseDTO {
    private String title;
    private String content;
    private String category;
    private float latitude;
    private float longitude;
    private int checkNum;
    private List<Image> images;
    private LocalDateTime createdAt;
    private LocalDateTime deadLine;
}
