package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dto.PasswordRequest;
import com.backend.model.Password;
import com.backend.service.PasswordService;

@RestController
@RequestMapping("/api")
public class PasswordController {

    @Autowired
    private PasswordService passwordService;

    @PostMapping("/generate-password")
    public Password generatePassword(
            @RequestBody PasswordRequest passwordRequest) {

        Password generatedPassword = passwordService.generatePassword(
                passwordRequest.getLength(),
                passwordRequest.isUseUpper(),
                passwordRequest.isUseLower(),
                passwordRequest.isUseNumbers(),
                passwordRequest.isUseSpecial());

        return generatedPassword;
    }

    @GetMapping("/password-history")
    public Iterable<Password> getPasswordHistory() {

        return passwordService.getPasswordHistory();
    }

}
