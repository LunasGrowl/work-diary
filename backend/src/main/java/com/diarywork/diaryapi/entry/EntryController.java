package com.diarywork.diaryapi.entry;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/entry")
public class EntryController {

    @Autowired
    private EntryService entryService;

    @GetMapping
    public ResponseEntity<List<Entry>> getEntry(){
        List<Entry> entrys = entryService.getEntry();
        return new ResponseEntity<>(entrys, HttpStatus.OK);
    }

    @GetMapping(path = "{entryId}")
    public ResponseEntity<Optional<Entry>> getEntryById(@PathVariable("entryId") Long id){
        Optional<Entry> entry = Optional.ofNullable(entryService.getEntryById(id));
        return new ResponseEntity(entry, HttpStatus.OK);
    }

    @PostMapping("/add")
    public void addNewEntry(@RequestBody Entry entry){
        entryService.addNewEntry(entry);
    }

    @DeleteMapping(path = "{entryId}")
    public void deleteEntry(@PathVariable("entryId") Long id){
        entryService.deleteEntry(id);
    }

    @PutMapping(path = "/{entryId}")
    public void updateEntry(
            @PathVariable("entryId") Long id,
            @RequestParam(required = false) String entry_content){
        entryService.updateEntry(id, entry_content);
    }

}
