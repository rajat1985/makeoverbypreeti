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



    images = [
      './assets/makeup1.jpeg',
      './assets/makeup2.jpeg',
      './assets/makeup3.jpeg',
      './assets/makeup4.jpeg',
            './assets/makeup5.jpeg',
            './assets/makeup6.jpeg',
             './assets/makeup7.jpeg',
      // Add more image paths as needed
    ];
    currentIndex = 0;

   /*  openCarousel(index: number) {
      this.currentIndex = index;
      const carouselModal = new Modal(document.getElementById('carouselModal'));
      carouselModal.show();
    } */


}
