import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users = <any>[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('INIT Users')
    this.dataService.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.users = data;
    })
  }


}
