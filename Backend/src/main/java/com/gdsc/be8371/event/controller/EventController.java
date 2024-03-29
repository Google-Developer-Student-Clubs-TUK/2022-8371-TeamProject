package com.gdsc.be8371.event.controller;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventListResponseDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.service.EventService;
import com.gdsc.be8371.global.entity.GCPService;
import com.gdsc.be8371.global.entity.ResponseFormat;
import com.gdsc.be8371.global.entity.ResponseStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.Charset;
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
    public ResponseEntity<ResponseFormat<List<EventListResponseDTO>>> get_event_all(@RequestParam(required = false)String category,@RequestParam(required = false)Integer id) throws Exception {
        log.info("start EventController.get_event_all method");
        log.info("category : "+category);
        List<EventListResponseDTO> events = null;
        if (category != null) {
            events = eventService.get_event_all(category);
        } else {
            events = eventService.get_event_all();
        }
        ResponseFormat<List<EventListResponseDTO>> responseFormat = new ResponseFormat<>(ResponseStatus.GET_EVENT_SUCCESS, events);
        return ResponseEntity.status(HttpStatus.OK).headers(createHeaders()).body(responseFormat);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseFormat<EventResponseDTO>> get_event_by_id(@PathVariable Integer id) throws Exception {
        log.info("start get_even_by_id method");
        EventResponseDTO event = eventService.get_event_by_id(id);
        ResponseFormat<EventResponseDTO> responseFormat = new ResponseFormat<>(ResponseStatus.GET_EVENT_SUCCESS, event);
        return ResponseEntity.status(HttpStatus.OK).headers(createHeaders()).body(responseFormat);
    }

    //이벤트 생성
    @PostMapping
    public ResponseEntity<ResponseFormat<EventListResponseDTO>> create_event(EventRequestDTO eventRequestDTO, @RequestPart("images") List<MultipartFile> multipartFiles) throws Exception {
        log.info("start EventController.create_event method");
        if (multipartFiles == null) {
            log.warn("파일없음");
        }
        List<String> urls = gcpService.uploadFile(multipartFiles);
        eventService.create(eventRequestDTO, urls);
        ResponseFormat<EventListResponseDTO> responseFormat = new ResponseFormat<>(ResponseStatus.POST_EVENT_SUCCESS);
        return ResponseEntity.status(HttpStatus.CREATED).headers(createHeaders()).body(responseFormat);
    }

    @PutMapping
    public ResponseEntity<ResponseFormat<EventListResponseDTO>> add_event(@RequestParam int id) throws Exception {
        log.info("start edit_event");
        eventService.update_CheckNum(id);
        ResponseFormat<EventListResponseDTO> responseFormat = new ResponseFormat<>(ResponseStatus.PUT_EVENT_SUCCESS);
        return ResponseEntity.status(HttpStatus.OK).headers(createHeaders()).body(responseFormat);
    }

    // 예외처리
//    @ExceptionHandler(NullPointerException.class)
//    public Object nullEx(Exception e){
//        System.out.println(e.getClass());
//        return "요청받은 데이터 값이 Null인 데이터가 있습니다.";
//    }

    public HttpHeaders createHeaders(){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        return headers;
    }
}
