package com.summitworks.ngobackend;

import com.summitworks.ngobackend.config.SecurityConfiguration;
import com.summitworks.ngobackend.model.Donation;
import com.summitworks.ngobackend.model.User;
import com.summitworks.ngobackend.repo.DonationRepo;
import com.summitworks.ngobackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.util.Date;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepo.class)
public class NgoBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(NgoBackendApplication.class, args);
    }

    @Autowired
    UserRepo userRepo;
    @Autowired
    DonationRepo donationRepo;

    Date date = new Date();

    @Override
    public void run(String... args) throws Exception {
    //String firstName, String email, String password, String role)
        this.userRepo.save(new User("Michelle", "Smith", "user@gmail.com", "user", "ROLE_USER", true));
        this.userRepo.save(new User("Bobby", "Biggs", "admin@gmail.com", "admin", "ROLE_ADMIN", true
        ));

        //String type, String name, Date date, double amount)
        this.donationRepo.save(new Donation("Bake Sale", "Bob Smith", date, 50));
        this.donationRepo.save(new Donation("Fundraiser", "Albert Admin", date, 150));
        this.donationRepo.save(new Donation("Dog Rescue", "Mike Jones", date, 50));
        this.donationRepo.save(new Donation("Marathon", "Bobby Bill", date, 250));
    }
}
