import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name    : string | undefined;
  email   : string | undefined;
  message = 'Please fill above fields and press submit button';
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    this.message = `your name is ${this.name}. and your email is ${this.email}`
    //we have to grab all the fields and their values
  }
}
