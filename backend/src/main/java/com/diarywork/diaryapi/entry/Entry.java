package com.diarywork.diaryapi.entry;


import jakarta.persistence.*;

//@NoArgsConstructor
@Entity
@Table
public class Entry {

    @Id
    //@SequenceGenerator(name = "entry_sequence", sequenceName = "entry_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String entry_day;

    @Column
    private String entry_date;

    @Column
    private String entry_content;

    public Entry(String entry_day, String entry_date, String entry_content) {
        this.entry_day = entry_day;
        this.entry_date = entry_date;
        this.entry_content = entry_content;
    }

    public Entry(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEntry_content() {
        return entry_content;
    }

    public void setEntry_content(String entry_content) {
        this.entry_content = entry_content;
    }

    public String getEntry_date() {
        return entry_date;
    }

    public void setEntry_date(String entry_date) {
        this.entry_date = entry_date;
    }

    public String getEntry_day() {
        return entry_day;
    }

    public void setEntry_day(String entry_day) {
        this.entry_day = entry_day;
    }
}



