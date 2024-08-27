package com.diarywork.diaryapi.entry;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class EntryService{

    @Autowired
    private EntryRepo entryRepo;

    public List<Entry> getEntry(){
        return entryRepo.findAll();
    }

    public Entry getEntryById(Long id){
        return entryRepo.findById(id).orElse(null);
    }

    public Entry addNewEntry(Entry entry){
        return entryRepo.save(entry);
    }

    public void deleteEntry(Long id){
        boolean exists = entryRepo.existsById(id);
        if(!exists){
            throw new IllegalStateException("student with id " + id + "does not exists");
        }
        entryRepo.deleteById(id);
    }

    @Transactional
    public void updateEntry (Long id, String entry_content) {
        Entry entry = entryRepo.findById(id).orElseThrow(() -> new IllegalStateException("This Entry does not exist"));
        if (entry_content != null &&
                !entry_content.isEmpty() &&
                !Objects.equals(entry.getEntry_content(), entry_content)) {
            entry.setEntry_content(entry_content);
        }
    }

}
