package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.entity.Event;

import java.util.List;

public interface EventService {
    public List<Event> get_event_all() throws Exception;
}
