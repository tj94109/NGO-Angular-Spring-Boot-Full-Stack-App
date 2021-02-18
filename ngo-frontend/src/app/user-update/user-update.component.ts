import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../restapi.service';
import { User } from '../user';


@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  id: number;
  user: User = new User();
  constructor(private restapi: RestApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.restapi.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error)
    );
  }

  onSubmit() {
    this.restapi.updateUser(this.id, this.user).subscribe( data => {
      this.goToUserList();
    }, error => console.log(error)
    ); 
  }
  
  goToUserList(){
    this.router.navigate(['user-management']);
  }
}
