package com.gdsc.be8371.event.repository;

import com.gdsc.be8371.event.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    @Query(value = "SELECT * FROM event where category = ?1",nativeQuery = true)
    List<Event> findAllByCategory (String category);
}
