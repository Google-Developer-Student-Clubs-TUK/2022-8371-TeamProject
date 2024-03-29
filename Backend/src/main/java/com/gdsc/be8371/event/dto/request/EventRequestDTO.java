package com.gdsc.be8371.event.dto.request;

import com.gdsc.be8371.event.entity.Event;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@AllArgsConstructor
@Builder
@Getter
@ToString
@Slf4j
public class EventRequestDTO {
    private String title;
    private String content;
    private String category;
    private float latitude;
    private float longitude;
    private List images;

    public Event toEventEntity(EventRequestDTO eventRequestDTO) {
        log.info("start EventRequestDTO.toEventEntity method");
        return Event.builder()
                .title(eventRequestDTO.getTitle())
                .category(eventRequestDTO.getCategory())
                .content(eventRequestDTO.getContent())
                .latitude(eventRequestDTO.getLatitude())
                .longitude(eventRequestDTO.getLongitude())
                .build();
    }
}
