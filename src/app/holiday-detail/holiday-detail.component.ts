import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HolidaysService } from '../shared/services/holidays.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css']
})
export class HolidayDetailComponent implements OnInit {
  @Input() holidayDetails: any;

  constructor(
    private _holidaysService: HolidaysService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    let holidayDate: any;
    
    this._activatedRoute.params
      .subscribe((params:Params) => holidayDate = params['holiday']);

    this._holidaysService.getListOfHolidays()
      .subscribe(response => {
        this.holidayDetails = response['holidays'][holidayDate];
      })
  }

}
