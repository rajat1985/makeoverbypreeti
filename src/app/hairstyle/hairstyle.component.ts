import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-hairstyle',
  templateUrl: './hairstyle.component.html',
  styleUrls: ['./hairstyle.component.css']
})
export class HairstyleComponent implements OnInit {

imageUrls: string[] = [
      '/assets/hairstyle/hairstyle1.jpeg',
      '/assets/hairstyle/hairstyle2.jpeg',
      '/assets/hairstyle/hairstyle3.jpeg',
      '/assets/hairstyle/hairstyle4.jpeg',
      '/assets/hairstyle/hairstyle5.jpeg',
      '/assets/hairstyle/hairstyle6.jpeg',

      // Add more image URLs as needed
    ];
  constructor() { }

  ngOnInit(): void {
  }

   @Input() items: string[] = []; // Array of image URLs or content
    currentIndex: number = 0;

    next() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }

    previous() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.items.length - 1;
      }
    }

    getCurrentItem() {
      return this.items[this.currentIndex];
    }

}
