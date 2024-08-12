import { Component, OnInit, ViewChild } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm: any;
  thankYouMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    emailjs.init('EkxCKLVI2Iv0XCnuu');
  }

  onSubmit(form: any): void {
    const userDetails = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    this.sendThankYouReply(userDetails);
  }

  sendThankYouReply(userDetails: { name: string, email: string }) {
    const templateParams = {
      user_name: userDetails.name,
      your_name: 'MakeOverByPreeti',
      your_position: 'Professional Makeup Artist',
      your_company: 'MakeOverByPreeti INC.',
      contact_number: '945-260-5235',
    };

    emailjs.send('service_dxo76rq', 'template_iwpo9gq', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.thankYouMessage = 'Thank you for reaching out to us!';
        this.contactForm.reset();
        setTimeout(() => {
          this.thankYouMessage = '';
        }, 5000); // Hide the message after 5 seconds
      }, (error) => {
        console.error('FAILED...', error);
      });
  }
}
