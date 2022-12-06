package com.gdsc.be8371.event.repository;

import com.gdsc.be8371.event.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.net.URL;
import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image,Integer> {
    @Query(value = "select file_url from image where event_id = ?1",nativeQuery = true)
    List<String> findImagesByEventId(Integer id);
}
