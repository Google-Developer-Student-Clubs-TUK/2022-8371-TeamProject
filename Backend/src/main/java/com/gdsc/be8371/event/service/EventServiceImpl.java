package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;
import com.gdsc.be8371.event.entity.Event;
import com.gdsc.be8371.event.entity.Image;
import com.gdsc.be8371.event.repository.EventRepository;
import com.gdsc.be8371.event.repository.ImageRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public List<EventResponseDTO> get_event_all() throws Exception {
        log.info("start EventService.get_event_all method");
        List<Event> events = eventRepository.findAll();
        return toEventResponseDTOs(events);
    }

    @Override
    public List<EventResponseDTO> get_event_all(String category) throws Exception {
        log.info("start EventService.get_event_all(category) method");
        List<Event> events = eventRepository.findAllByCategory(category);
        return toEventResponseDTOs(events);
    }

    @Override
    public void update_CheckNum(int id) throws Exception {
        log.info("start add_checkNum method");
        eventRepository.updateCheckNum(id);
    }

    @Override
    public void create(EventRequestDTO eventRequestDTO, List<String> urls) throws Exception{
        log.info("start EventService.create method");
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

    public List<EventResponseDTO> toEventResponseDTOs(List<Event> events) throws Exception{
        log.info("start EventService.toEventResponseDTOs");
        List<EventResponseDTO> eventResponseDTOList = new ArrayList<>();

        for(Event event : events){
            List<URL> images = new ArrayList<>();
            List<String> strUrls = imageRepository.findImagesByEventId(event.getId());
            for(String strUrl : strUrls){
                URL url = new URL(strUrl);
                images.add(url);
            }
            eventResponseDTOList.add(event.toEventResponseDto(event,images));
        }
        return eventResponseDTOList;
    }

}
