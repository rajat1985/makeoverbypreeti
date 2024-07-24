import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {




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
