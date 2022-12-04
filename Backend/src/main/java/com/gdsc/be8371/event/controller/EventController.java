package com.gdsc.be8371.event.controller;

import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.Charset;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("")
    public ResponseEntity<List<EventResponseDTO>> get_event_all() throws Exception {
        List<EventResponseDTO> events = eventService.get_event_all();
        return new ResponseEntity<List<EventResponseDTO>>(events, HttpStatus.OK);
    }
}
