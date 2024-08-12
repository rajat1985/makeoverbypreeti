import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {

imageUrls: { url: string, caption: string }[] = [
  { url: './assets/makeup2.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup3.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup4.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup5.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup6.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup7.jpeg', caption: 'Simple Makeup' },
  // Add more image URLs and captions as needed
];
  constructor() { }

   ngOnInit(): void {
   }

    @Input() items: string[] = []; // Array of image URLs or content

 }
