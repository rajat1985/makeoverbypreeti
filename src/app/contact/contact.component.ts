import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  emailjs.init('EkxCKLVI2Iv0XCnuu');

  /* emailjs.init({
    publicKey: 'EkxCKLVI2Iv0XCnuu',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
  } */
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

    /* emailjs.send("service_dxo76rq","template_iwpo9gq",{
    from_name: "rajat",
    user_name: "Hello",
    contact_number: "469",
    your_name: "Rajat Saha",
    your_position: "Senion",
    your_company: "MakeOverBy Prreti",
    reply_to: "test",
    });
    } */

     emailjs.send('service_dxo76rq', 'template_iwpo9gq',templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.error('FAILED...', error);
      });
  }


}
