package com.diarywork.diaryapi.entry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EntryRepo extends JpaRepository<Entry,Long> {


}
