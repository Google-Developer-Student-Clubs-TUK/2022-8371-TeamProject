package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.repository.EventRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<EventResponseDTO> get_event_all() throws Exception {
        List<Event> events = eventRepository.findAll();
        List<EventResponseDTO> eventResponseDTOList = toEventResponseDTO(events);
        return eventResponseDTOList;
    }


    @Override
    public List<Event> get_event_all_by_category(String category) throws Exception {
        return eventRepository.findAllByCategory(category);
    }

    public List<EventResponseDTO> toEventResponseDTO(List<Event> events) {
        List<EventResponseDTO> eventResponseDTOs = new ArrayList<EventResponseDTO>();
        Date currentDate = new Date(System.currentTimeMillis());
        for (Event event : events) {
            EventResponseDTO eventResponseDTO = EventResponseDTO.builder()
                    .id(event.getId())
                    .title(event.getTitle())
                    .content(event.getContent())
                    .category(event.getCategory())
                    .latitude(event.getLatitude())
                    .longitude(event.getLongitude())
                    .checkNum(event.getCheckNum())
                    .createdAt(event.getCreatedAt())
                    .deadLine(currentDate)
                    .build();
            eventResponseDTOs.add(eventResponseDTO);
        }
        return eventResponseDTOs;
    }

    @Override
    public EventResponseDTO create(EventRequestDTO eventRequestDTO, EventResponseDTO eventResponseDTO) throws Exception{
        //Event saveEvent = eventRequestDTO.toEntity(eventRequestDTO);
        Event saveEvent = eventRequestDTO.toEntity(eventRequestDTO);
        eventRepository.save(saveEvent);

        return eventResponseDTO.toDto(saveEvent);
    }
}
