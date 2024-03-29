package com.gdsc.be8371.event.service;

import com.gdsc.be8371.event.dto.request.EventRequestDTO;
import com.gdsc.be8371.event.dto.response.EventListResponseDTO;
import com.gdsc.be8371.event.dto.response.EventResponseDTO;

import java.util.List;

public interface EventService {
    // 이벤트 생성
    public void create(EventRequestDTO eventRequestDTO, List<String> urls) throws Exception;
    public List<EventListResponseDTO> get_event_all() throws Exception;
    public List<EventListResponseDTO> get_event_all(String category) throws Exception;
    public EventResponseDTO get_event_by_id(Integer id) throws Exception;
    public void update_CheckNum(int id) throws Exception;
}
