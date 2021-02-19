package com.summitworks.ngobackend.controller;

import com.summitworks.ngobackend.model.Donation;
import com.summitworks.ngobackend.repo.DonationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class DonationController {

    @Autowired
    private DonationRepo donationRepo;

    //get list of donations
    @GetMapping("donations")
    public List<Donation> getDonations() {
        return this.donationRepo.findAll();
    }

    //create a donation
    @PostMapping("donations")
    public Donation createDonation(@RequestBody Donation donation){
        return donationRepo.save(donation);
    }

    //get a donation by id
    @GetMapping("donations/{id}")
    public Optional<Donation> getDonationById(@PathVariable(value = "id")long id){
        return donationRepo.findById(id);
    }

    @RequestMapping(value = "donations/{id}",
            produces = "application/json",
            method=RequestMethod.PUT)
    public ResponseEntity<Donation> updateDonation(@PathVariable Long id, @RequestBody Donation donationAng){
        Donation donation = donationRepo.findById(id).get();
        donation.setType(donationAng.getType());
        donation.setName(donationAng.getName());
        donation.setDate(donationAng.getDate());
        donation.setAmount(donationAng.getAmount());
        Donation updatedDonation = donationRepo.save(donation);
        return ResponseEntity.ok(updatedDonation);
    }

    @DeleteMapping("/donations/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDonation(@PathVariable Long id){
        Donation donation = donationRepo.findById(id).get();
        donationRepo.delete(donation);
        Map<String, Boolean>response = new HashMap<>();
        response.put("DELETED", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
