package com.gdsc.be8371.event.dto.response;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.entity.Event;
import lombok.*;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Builder
@Setter
@Getter
@ToString
public class EventResponseDTO {
//    private Integer id;
    private String title;
    private String content;
    private String category;
    private float latitude;
    private float longitude;
    private int checkNum;
    private Date createdAt;
    private Date deadLine;

//    public EventResponseDTO toDto(Event eventEntity) {
//        return EventResponseDTO.builder().build();
//    }


}
