import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-hairstyle',
  templateUrl: './hairstyle.component.html',
  styleUrls: ['./hairstyle.component.css']
})
export class HairstyleComponent implements OnInit {



    imageUrls: { url: string, caption: string }[] = [
      { url: './assets/hairstyle/hairstyle1.jpeg', caption: 'Simple Hairstyle' },
      { url: './assets/hairstyle/hairstyle2.jpeg', caption: 'Simple Hairstyle' },
      { url: './assets/hairstyle/hairstyle3.jpeg', caption: 'Simple Hairstyle' },
      { url: './assets/hairstyle/hairstyle4.jpeg', caption: 'Simple Hairstyle' },
      { url: './assets/hairstyle/hairstyle5.jpeg', caption: 'Simple Hairstyle' },
      { url: './assets/hairstyle/hairstyle6.jpeg', caption: 'Simple Hairstyle' },
      // Add more image URLs and captions as needed
    ];
  constructor() { }

  ngOnInit(): void {
  }

   @Input() items: string[] = []; // Array of image URLs or content

}
