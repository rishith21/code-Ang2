import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../shared/services/holidays.service';
import { KeysPipe } from '../shared/pipes/keys.pipe';

@Component({
  selector: 'holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css']
})
export class HolidaysListComponent implements OnInit {
  listOfHolidays: Array<any>;
  constructor(
    private _holidaysService: HolidaysService
  ) { }

  ngOnInit() {
    this._holidaysService.getListOfHolidays()
    .subscribe(response => {
      this.listOfHolidays = response['holidays'];
    });
  }

}
