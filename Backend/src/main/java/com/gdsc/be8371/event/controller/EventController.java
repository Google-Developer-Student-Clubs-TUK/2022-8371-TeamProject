package com.gdsc.be8371.event.controller;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.service.EventService;
import com.gdsc.be8371.global.entity.ResponseFormat;
import com.gdsc.be8371.global.entity.ResponseStatus;
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

    @GetMapping
    public ResponseEntity<ResponseFormat<List<EventResponseDTO>>> get_event_all() throws Exception {
        List<EventResponseDTO> events = eventService.get_event_all();
        ResponseFormat<List<EventResponseDTO>> responseFormat = new ResponseFormat<>(ResponseStatus.GET_EVENT_SUCCESS, events);
        return ResponseEntity.status(HttpStatus.OK).body(responseFormat);
    }

    // 이벤트 생성
    @PostMapping
    public ResponseEntity<ResponseFormat<EventResponseDTO>> create_event(EventRequestDTO eventRequestDTO, EventResponseDTO eventResponseDTO, Event event) throws Exception{
        eventService.create(eventRequestDTO, eventResponseDTO);
        ResponseFormat<EventResponseDTO> responseFormat = new ResponseFormat(ResponseStatus.POST_EVENT_SUCCESS);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseFormat);
    }
}
