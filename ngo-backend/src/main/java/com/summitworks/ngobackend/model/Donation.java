package com.summitworks.ngobackend.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "donations")
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name ="type")
    private String type;

    @Column(name ="name")
    private String name;

    @Column(name ="date")
    private Date date;

    @Column(name ="amount")
    private double amount;

    //Constructor
    public Donation(){};

    //Constructor
    public Donation(String type, String name, Date date, double amount) {
        super();
        this.type = type;
        this.name = name;
        this.date = date;
        this.amount = amount;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }


}
