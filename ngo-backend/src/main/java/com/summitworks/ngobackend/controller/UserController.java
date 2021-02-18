package com.summitworks.ngobackend.controller;

import com.summitworks.ngobackend.model.User;
import com.summitworks.ngobackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepo userRepo;

    @GetMapping("users")
    public List<User> getUsers(){
        return this.userRepo.findAll();
    }

    //create users
    @PostMapping("users")
    public User createUser(@RequestBody User user){
        return userRepo.save(user);
    }
    //Get user By Id
    @GetMapping("users/{id}")
    public Optional<User> getUsersById(@PathVariable(value = "id") long id){
        return userRepo.findById(id);
    }

     // update user
    @RequestMapping(value = "users/{id}",
            produces = "application/json",
            method=RequestMethod.PUT)
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userAng) {
        User user = userRepo.findById(id).get();
        user.setFirstName(userAng.getFirstName());
        user.setLastName(userAng.getLastName());
        user.setEmail(userAng.getEmail());
        user.setPassword(userAng.getPassword());
        user.setRole(userAng.getRole());
        User updatedUser = userRepo.save(user);
        return ResponseEntity.ok(updatedUser);
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
        User user = userRepo.findById(id).get();
        userRepo.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("DELETED", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
