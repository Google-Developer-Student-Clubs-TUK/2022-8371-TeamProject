package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;

import java.util.List;

public interface EventService {
    public List<Event> get_event_all() throws Exception;

    EventResponseDTO create(EventRequestDTO eventRequestDTO, EventResponseDTO eventResponseDTO) throws Exception;

}
