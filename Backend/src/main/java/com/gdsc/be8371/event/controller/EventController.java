package com.gdsc.be8371.event.controller;

import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("")
    public List<Event> get_event_all() throws Exception {
        List<Event> events = eventService.get_event_all();
        return events;
    }
}
