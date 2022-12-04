package com.gdsc.be8371.event.entity;

import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@DynamicInsert
//@Builder
//@AllArgsConstructor
@ToString
//@Data
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

    @Column(nullable = false)
    private Date createdAt;

    public Event() {

    }

//    @Column(nullable = false)
//    @CreatedDate
//    private Date createdAt;

//    @Builder
//    public Event(String title, String content, String category, float longitude, float latitude, int checkNum){
//        this.title = title;
//        this.content = content;
//        this.category = category;
//        this.latitude = latitude;
//        this.longitude = longitude;
//        this.checkNum = checkNum;
//    }

//    public Event() {
//
//    }
    public EventResponseDTO toEventResponseDto(Event event){
        return EventResponseDTO.builder()
                .title(event.getTitle())
                .content(event.getContent())
                .category(event.getCategory())
                .latitude(event.getLatitude())
                .longitude(event.getLongitude())
                .checkNum(event.getCheckNum())
                .createdAt(new Date(System.currentTimeMillis()))
                .build();
    }
}
