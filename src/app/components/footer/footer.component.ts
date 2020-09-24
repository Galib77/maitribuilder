import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyright= "Copyright © 2020 Maitri Developers And Builders  All Right Reserved. Designed And Developed By";
  companyName="Netcom Business Solutions";
  constructor() { }

  ngOnInit() {
  }

}
