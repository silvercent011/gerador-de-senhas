package com.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PasswordController {

    @PostMapping("/generate-password")
    public String generatePassword() {
        return "password";
    }

    @GetMapping("/password-history")
    public String getPasswordHistory() {
        return "password";
    }

}
