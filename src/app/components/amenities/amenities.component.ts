import { Component, OnInit } from '@angular/core';

import amenities from '../../_data/amenities.json';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {
  title="Lifestyle Campus Amenities";
  amenitiesList:{name:string}[] = amenities;
  constructor() { }

  ngOnInit() {
  }

}
