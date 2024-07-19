import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  imageObject: Array<object> = [
    {
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/red-wine-makeup-lead.jpg?c=16x9&q=w_800,c_fill',
      thumbImage: 'https://media.cnn.com/api/v1/images/stellar/prod/red-wine-makeup-lead.jpg?c=16x9&q=w_800,c_fill',
      alt: 'Image 1'
    },
    {
      image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63524d71d9d736001eec7d45.jpg',
      thumbImage: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63524d71d9d736001eec7d45.jpg',
      alt: 'Image 2'
    },
    // Add more images as needed
  ];


  constructor() { }

  ngOnInit(): void {
  }

  booking = {
    name: '',
    email: '',
    phone: '',
    service: ''
  };

  submitBooking() {
    // Send booking request to backend or perform desired action
    console.log('Booking details:', this.booking);
    // Reset form after submission
    this.resetForm();
  }

  resetForm() {
    this.booking = {
      name: '',
      email: '',
      phone: '',
      service: ''
    };
  }

}
