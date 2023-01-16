package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventListResponseDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.entity.Image;
import com.gdsc.be8371.event.repository.EventRepository;
import com.gdsc.be8371.event.repository.ImageRepository;
import com.gdsc.be8371.global.exception.EventExceptionType;
import com.gdsc.be8371.global.exception.FreeBoardException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URL;
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
    public List<EventListResponseDTO> get_event_all() throws Exception {
        log.info("start EventService.get_event_all method");
        List<Event> events = eventRepository.findAll();
        return toEventListResponseDTOs(events);
    }

    @Override
    public List<EventListResponseDTO> get_event_all(String category) throws Exception {
        log.info("start EventService.get_event_all(category) method");
        List<Event> events = eventRepository.findAllByCategory(category);
        return toEventListResponseDTOs(events);
    }

    @Override
    public EventResponseDTO get_event_by_id(Integer id) throws Exception {
        log.info("start get_event_by_id method");
        Event event = eventRepository.findById(id).get();
        log.info(event.toString());

        List<URL> images = new ArrayList<>();
        List<String> strUrls = imageRepository.findImagesByEventId(event.getId());
        for(String strUrl : strUrls){
            URL url = new URL(strUrl);
            images.add(url);
        }
        return event.toEventResponseDto(event,images);
    }

    @Override
    public void update_CheckNum(int id) throws Exception {
        log.info("start add_checkNum method");
        eventRepository.updateCheckNum(id);
    }

    @Override
    public void create(EventRequestDTO eventRequestDTO, List<String> urls) throws Exception{
        log.info("start EventService.create method");
        String latiValue = Float.toString(eventRequestDTO.getLatitude());
        String longiValue = Float.toString(eventRequestDTO.getLongitude());
//        System.out.println(latiValue);
//        System.out.println(longiValue);
//        if (Event.builder().longitude(null)){
//            throw new FreeBoardException(EventExceptionType.NULL_PLACE_VALUE);
//        }
        Event saveEvent = eventRequestDTO.toEventEntity(eventRequestDTO);
        eventRepository.save(saveEvent);
        List<String> urlList = new ArrayList<>();
        for(String fileUrl : urls) {
            Image image = Image.builder()
                    .fileUrl(fileUrl)
                    .event(saveEvent)
                    .build();
            imageRepository.save(image);
            urlList.add(image.getFileUrl());
        }
    }

    public List<EventListResponseDTO> toEventListResponseDTOs(List<Event> events) throws Exception{
        log.info("start EventService.toEventListResponseDTOs");
        List<EventListResponseDTO> eventResponseDTOList = new ArrayList<>();

        for(Event event : events){
            List<URL> images = new ArrayList<>();
            List<String> strUrls = imageRepository.findImagesByEventId(event.getId());
            for(String strUrl : strUrls){
                URL url = new URL(strUrl);
                images.add(url);
            }
            eventResponseDTOList.add(event.toEventListResponseDto(event,images));
        }
        return eventResponseDTOList;
    }

}
