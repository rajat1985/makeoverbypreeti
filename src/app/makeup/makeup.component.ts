import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {

imageUrls: { url: string, caption: string }[] = [
  { url: './assets/makeup/makeup1.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup/makeup2.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup/makeup3.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup/makeup4.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup/makeup5.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup/makeup6.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup/makeup7.jpeg', caption: 'Simple Makeup' },
  { url: './assets/makeup/makeup8.jpeg', caption: 'Simple Makeup' },
    { url: './assets/makeup/makeup9.jpeg', caption: 'Simple Makeup' },
    { url: './assets/makeup/makeup10.jpeg', caption: 'Simple Makeup' },
    { url: './assets/makeup/makeup11.jpeg', caption: 'Simple Makeup' },
    { url: './assets/makeup/makeup12.jpeg', caption: 'Simple Makeup' },
    { url: './assets/makeup/makeup13.jpeg', caption: 'Simple Makeup' },
    { url: './assets/makeup/makeup14.jpeg', caption: 'Simple Makeup' },
        { url: './assets/makeup/makeup15.jpeg', caption: 'Simple Makeup' },
        { url: './assets/makeup/makeup16.jpeg', caption: 'Simple Makeup' },
        { url: './assets/makeup/makeup17.jpeg', caption: 'Simple Makeup' },
        { url: './assets/makeup/makeup18.jpeg', caption: 'Simple Makeup' },
        { url: './assets/makeup/makeup19.jpeg', caption: 'Simple Makeup' },
        { url: './assets/makeup/makeup20.jpeg', caption: 'Simple Makeup' },
  // Add more image URLs and captions as needed
];
  constructor() { }

   ngOnInit(): void {
   }

    @Input() items: string[] = []; // Array of image URLs or content

 }
