package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<Event> get_event_all() throws Exception {
        return eventRepository.findAll();
    }
}
