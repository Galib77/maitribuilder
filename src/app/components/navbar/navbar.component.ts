import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 welcomeMsg = "Welcome To";
 welcomeMsgParaFirst="Maitri Developers And Builders";
 welcomeMsgParaSecond="Bookings Now Open for New Tower";
  constructor() { }

  ngOnInit() {
  }

}
