import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {
  myGalleryImg1:string = "../../../assets/images/gallery/1.jpg";
  myGalleryImg2:string = "../../../assets/images/gallery/2.jpg";
  myGalleryImg3:string = "../../../assets/images/gallery/3.jpg";
  myGalleryImg4:string = "../../../assets/images/gallery/4.jpg";
  myGalleryImg5:string = "../../../assets/images/gallery/5.jpg";
  myGalleryImg6:string = "../../../assets/images/gallery/6.jpg";
  myGalleryImg7:string = "../../../assets/images/gallery/7.jpg";
  constructor() { }

  ngOnInit() {
  }

}
