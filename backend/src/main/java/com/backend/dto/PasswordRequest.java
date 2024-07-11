package com.backend.dto;

import lombok.Getter;

@Getter
public class PasswordRequest {
    private int length;
    private boolean useUpper;
    private boolean useLower;
    private boolean useNumbers;
    private boolean useSpecial;
}
