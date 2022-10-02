import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatetimeDemo';
  todate=new Date();
  datepickerConfig!:Partial<BsDatepickerConfig>;
  constructor ()
  {
    this.datepickerConfig=Object.assign({},{containerClass:'theme-green',showWeekNumbers:false,showTodayButton:true},
                                           {dateInputFormat:'DD/MM/YYYY'},
                                           {minDate:new Date(2021,7,1)},
                                           {maxDate:new Date(2021,9,20)}
                                           );
  }
  ngOnInit()
  {

  }
}
