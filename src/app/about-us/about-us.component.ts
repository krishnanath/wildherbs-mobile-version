import { Component, OnInit } from '@angular/core';
import '../../assets/js/fancy-form.js';



declare var $: any;
declare const myTest1: any;


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    myTest1();
  }

}
