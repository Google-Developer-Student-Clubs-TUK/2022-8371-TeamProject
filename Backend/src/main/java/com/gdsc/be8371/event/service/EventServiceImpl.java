package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.entity.Image;
import com.gdsc.be8371.event.repository.EventRepository;
import com.gdsc.be8371.event.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public List<EventResponseDTO> get_event_all() throws Exception {
        List<Event> events = eventRepository.findAll();
        return toEventResponseDTOs(events);
    }

    @Override
    public List<EventResponseDTO> get_event_all(String category) throws Exception {
        List<Event> events = eventRepository.findAllByCategory(category);
        return toEventResponseDTOs(events);
    }

    @Override
    public void create(EventRequestDTO eventRequestDTO, List<String> urls) throws Exception{
        Event saveEvent = eventRequestDTO.toEventEntity(eventRequestDTO);
        eventRepository.save(saveEvent);
        List<String> urlList = new ArrayList<>();
        for(String fileUrl : urls) {
            Image image = new Image(fileUrl, saveEvent);
            imageRepository.save(image);
            urlList.add(image.getFileUrl());
        }
    }

    public List<EventResponseDTO> toEventResponseDTOs(List<Event> events){
        List<EventResponseDTO> eventResponseDTOList = new ArrayList<>();
        for(Event event : events){
            eventResponseDTOList.add(event.toEventResponseDto(event));
        }
        return eventResponseDTOList;
    }
}
