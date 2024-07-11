package com.backend.service;

import java.security.SecureRandom;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.model.Password;
import com.backend.repository.PasswordRepository;

@Service
public class PasswordService {

    @Autowired
    private PasswordRepository passwordRepository;

    private static final String CHAR_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String NUMBER = "0123456789";
    private static final String SPECIAL_CHAR = "!@#$%^&*()_+";

    private SecureRandom random = new SecureRandom();

    public Password generatePassword(int length, boolean useUpper, boolean useLower, boolean useNumbers,
            boolean useSpecial) {
        StringBuilder charPool = new StringBuilder();
        if (useUpper)
            charPool.append(CHAR_UPPER);
        if (useLower)
            charPool.append(CHAR_LOWER);
        if (useNumbers)
            charPool.append(NUMBER);
        if (useSpecial)
            charPool.append(SPECIAL_CHAR);

        if (charPool.length() == 0)
            throw new IllegalArgumentException("At least one character set must be selected");

        StringBuilder password = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            password.append(charPool.charAt(random.nextInt(charPool.length())));
        }

        Password passwordEntity = new Password();
        passwordEntity.setPassword(password.toString());
        passwordEntity.setCreatedAt(LocalDateTime.now());
        return passwordRepository.save(passwordEntity);
    }

    public Iterable<Password> getPasswordHistory() {
        return passwordRepository.findAll();
    }
}