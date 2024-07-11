package com.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Password {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String password;

    private LocalDateTime createdAt;

}
