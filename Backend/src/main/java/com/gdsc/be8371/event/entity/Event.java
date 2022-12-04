package com.gdsc.be8371.event.entity;

import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@ToString
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

    @Column(nullable = false)
    private int checkNum;

    @Column(nullable = false)
    @CreatedDate
    private Date createdAt;

    public Event() {

    }


}
