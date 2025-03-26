package com.cs4337.analytics;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class testController {
    @GetMapping("/test")
    public String checkJwt() {
        return "Hello world!!";
    }
}