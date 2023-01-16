package com.gdsc.be8371;

import com.gdsc.be8371.event.controller.EventController;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.repository.EventRepository;
import com.gdsc.be8371.event.service.EventService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
@Slf4j
class ApplicationTests {

    @Autowired
    private EventRepository eventRepository;

    @Test
    void saveEventTest(){
        LocalDateTime date = LocalDateTime.now();
        Event event = Event.builder()
                .title("test2")
                .content("test2")
                .longitude(10.101f)
                .latitude(20.202f)
                .checkNum(0)
                .category("test2")
                .createdAt(date)
                .category("test3")
                .createdAt(date)
                .build();
        eventRepository.save(event);
    }
}
