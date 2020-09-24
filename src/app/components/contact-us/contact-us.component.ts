import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent  {

    public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_i58viuq', e.target as HTMLFormElement, 'user_MYnG46tsWxgwClSZSoUi3')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
