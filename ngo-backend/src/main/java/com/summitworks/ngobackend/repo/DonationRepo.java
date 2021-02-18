package com.summitworks.ngobackend.repo;

import com.summitworks.ngobackend.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepo extends JpaRepository<Donation,Long> {

}
