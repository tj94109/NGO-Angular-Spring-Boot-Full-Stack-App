package com.summitworks.ngobackend.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class HomeController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/")
    public String login() {

        return ("<h1> Welcome to the Home Template<h1>");
    }

    @ GetMapping("/success")
    public String logout(){

        return ("<h1> Logout Success!<h1>");
    }

    @GetMapping("/username")
    @ResponseBody
    public String currentUserName(Authentication authentication) {
        return authentication.getName();
    }

    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }

}
