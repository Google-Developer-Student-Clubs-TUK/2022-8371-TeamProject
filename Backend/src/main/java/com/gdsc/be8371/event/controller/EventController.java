package com.gdsc.be8371.event.controller;

import com.gdsc.be8371.event.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/event")
public class EventController {

    @Autowired
    private EventService eventService;

}
