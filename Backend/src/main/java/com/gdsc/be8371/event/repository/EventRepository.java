package com.gdsc.be8371.event.repository;

import com.gdsc.be8371.event.entity.Event;
import org.hibernate.annotations.SQLUpdate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    @Query(value = "SELECT * FROM event where category = ?1",nativeQuery = true)
    List<Event> findAllByCategory (String category);

    @Modifying
    @Transactional
    @Query(value = "UPDATE event SET check_num = check_num+1 WHERE id = ?1",nativeQuery = true)
    void updateCheckNum(int id);
}
