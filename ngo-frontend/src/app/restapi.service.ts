import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Donation } from './donation';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private donationUrl = "http://ngoproject.ml/ngo-backend/api/donations"
  private userUrl = "http://ngoproject.ml/ngo-backend/api/users"
 
  constructor(private httpClient:HttpClient) { }

  public login(username: string, password:string){
    const headers=new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password) })
    return this.httpClient.get("http://localhost:8080/",{headers,responseType:'test'as'json'})
  }

  getDonationsList(): Observable<Donation[]>{
    return this.httpClient.get<Donation[]>(`${this.donationUrl}`);
  }

  createDonation(donation: Donation): Observable<Object>{
    return this.httpClient.post(`${this.donationUrl}`, donation);
  }

  getDonationById(id: number): Observable<Donation>{
    return this.httpClient.get<Donation>(`${this.donationUrl}/${id}`);
  }

  updateDonation(id: number, donation: Donation): Observable<Object>{
    return this.httpClient.put(`${this.donationUrl}/${id}`, donation);
  }

  deleteDonation(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.donationUrl}/${id}`);
  }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.userUrl}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.userUrl}`, user);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.userUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.userUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }
 
}
