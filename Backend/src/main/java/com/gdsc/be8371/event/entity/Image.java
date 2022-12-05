package com.gdsc.be8371.event.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;

@Entity
@Getter
@ToString
@Builder
@AllArgsConstructor
@EntityListeners(AutoCloseable.class)
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fileUrl;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "event_id")
    private Event event;

    @Column(nullable = false)
    @CreatedDate
    private LocalDateTime createdAt;

    @Builder
    public Image(String fileUrl, Event event){
        this.fileUrl = fileUrl;
        this.event = event;
    }

    @PrePersist
    public void onPrePersist(){
        this.createdAt = LocalDateTime.now();
    }

    public Image() {

    }
}
