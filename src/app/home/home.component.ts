/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    'https://example.com/slide1.jpg',
    'https://example.com/slide2.jpg',
    'https://example.com/slide3.jpg'
  ];

  sliderConfig = {
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  };
}

