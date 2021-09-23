import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private http: HttpClient) {}
  response_form!: string;
  ngOnInit(): void {}
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http
        .post(
          'https://formspree.io/f/myyloool',
          { name: email.name, replyto: email.email, message: email.messages },
          { headers: headers }
        )
        .subscribe(
          (response) => {
            if (response) {
              this.response_form =
                'Your form was successfuly submitted. We will return to you as soon as possible!';
            }
            contactForm.reset();
            console.log(response);
          },
          (err) => {
            this.response_form =
              'There was a problem with the submission op your form. We are sorry, please try again!';
          }
        );
    }
  }
}
