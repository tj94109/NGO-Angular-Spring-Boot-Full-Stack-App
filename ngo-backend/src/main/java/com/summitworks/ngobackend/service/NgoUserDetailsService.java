package com.summitworks.ngobackend.service;

import com.summitworks.ngobackend.model.NgoUserDetails;
import com.summitworks.ngobackend.model.User;
import com.summitworks.ngobackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class NgoUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByEmail(userName);
        user.orElseThrow(()-> new UsernameNotFoundException("Not Found:" + userName));
        return user.map(NgoUserDetails::new).get();
    }
}
