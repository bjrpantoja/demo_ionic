import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  id: string;
  email: string;
  phone: string;
  website: string;

  employees = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info"
    }
  ]
  constructor(
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    console.log(this.id);

    if(this.id === '0') {
      this.email = this.employees[0].email;
      this.phone = this.employees[0].phone;
      this.website = this.employees[0].website;
    } else if(this.id === '1') {
      this.email = this.employees[1].email;
      this.phone = this.employees[1].phone;
      this.website = this.employees[1].website;
    } else if(this.id === '2') {
      this.email = this.employees[2].email;
      this.phone = this.employees[2].phone;
      this.website = this.employees[2].website;
    }
  }
}