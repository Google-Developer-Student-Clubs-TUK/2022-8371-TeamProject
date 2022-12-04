package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.repository.EventRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<Event> get_event_all() throws Exception {
        return eventRepository.findAll();
    }

    @Override
    public EventResponseDTO create(EventRequestDTO eventRequestDTO, EventResponseDTO eventResponseDTO) throws Exception{
        //Event saveEvent = eventRequestDTO.toEntity(eventRequestDTO);
        Event saveEvent = eventRequestDTO.toEntity(eventRequestDTO);
        eventRepository.save(saveEvent);

        return eventResponseDTO.toDto(saveEvent);
    }
}
