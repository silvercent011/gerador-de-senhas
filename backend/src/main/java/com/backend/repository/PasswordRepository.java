package com.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.backend.model.Password;

public interface PasswordRepository extends CrudRepository<Password, String> {
    Iterable<Password> findAllByOrderByCreatedAtDesc();
}
