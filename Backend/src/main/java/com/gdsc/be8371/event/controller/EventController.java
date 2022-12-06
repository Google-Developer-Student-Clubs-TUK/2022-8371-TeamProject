package com.gdsc.be8371.event.controller;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.service.EventService;
import com.gdsc.be8371.global.entity.GCPService;
import com.gdsc.be8371.global.entity.ResponseFormat;
import com.gdsc.be8371.global.entity.ResponseStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("api/v1/event")
@Slf4j
public class EventController {
    @Autowired
    private EventService eventService;

    @Autowired
    private GCPService gcpService;

    @GetMapping
    public ResponseEntity<ResponseFormat<List<EventResponseDTO>>> get_event_all(@RequestParam(required = false)String category) throws Exception {
        log.info("start EventController.get_event_all method");
        List<EventResponseDTO> events = null;
        System.out.println(category);
        if (category != null) {
            events = eventService.get_event_all(category);
        } else {
            events = eventService.get_event_all();
        }
        ResponseFormat<List<EventResponseDTO>> responseFormat = new ResponseFormat<>(ResponseStatus.GET_EVENT_SUCCESS, events);
        return ResponseEntity.status(HttpStatus.OK).body(responseFormat);
    }

    //이벤트 생성
    @PostMapping
    public ResponseEntity<ResponseFormat<EventResponseDTO>> create_event(EventRequestDTO eventRequestDTO, @RequestPart("images") List<MultipartFile> multipartFiles) throws Exception {
        log.info("start EventController.create_event method");
        if (multipartFiles == null) {
            log.warn("파일없음");
        }
        List<String> urls = gcpService.uploadFile(multipartFiles);
        eventService.create(eventRequestDTO, urls);
        ResponseFormat<EventResponseDTO> responseFormat = new ResponseFormat<>(ResponseStatus.POST_EVENT_SUCCESS);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseFormat);
    }
    
}
