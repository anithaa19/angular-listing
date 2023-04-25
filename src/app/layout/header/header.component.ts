import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  datePipe: DatePipe = new DatePipe('en-US');


  constructor() { }


  getFormattedDate(){
    
    var date = new Date();
    var transformDate = this.datePipe.transform(date, 'dd-MMM-yy');
    return transformDate;

  }

}
