package com.gdsc.be8371.event.entity;

import com.gdsc.be8371.event.dto.response.EventListResponseDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.net.URL;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@DynamicInsert
@ToString
@EntityListeners(AuditingEntityListener.class)
@Slf4j
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private float latitude;

    @Column(nullable = false)
    private float longitude;

    @Column
    @ColumnDefault("0")
    private int checkNum;

    @Column
    @CreatedDate
    private LocalDateTime createdAt;

    public Event() {

    }

    @PrePersist
    public void onPrePersist(){
        this.createdAt = LocalDateTime.now();
    }

    public EventListResponseDTO toEventListResponseDto(Event event){
        log.info("start Event.toEventResponseDto method");
        return EventListResponseDTO.builder()
                .id(event.getId())
                .title(event.getTitle())
//                .content(event.getContent())
                .category(event.getCategory())
                .latitude(event.getLatitude())
                .longitude(event.getLongitude())
                .checkNum(event.getCheckNum())
                .createdAt(event.getCreatedAt())
                .deadLine((int) ChronoUnit.HOURS.between(LocalDateTime.now(),event.getCreatedAt()))
//                .images(images)
                .build();
    }

    public EventResponseDTO toEventResponseDto(Event event, List<URL> images){
        log.info("start Event.toEventResponseDto method");
        return EventResponseDTO.builder()
                .id(event.getId())
                .title(event.getTitle())
                .content(event.getContent())
                .category(event.getCategory())
                .latitude(event.getLatitude())
                .longitude(event.getLongitude())
                .checkNum(event.getCheckNum())
                .createdAt(event.getCreatedAt())
                .deadLine((int) ChronoUnit.HOURS.between(LocalDateTime.now(),event.getCreatedAt()))
                .images(images)
                .build();
    }
}
