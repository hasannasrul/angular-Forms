import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  email: string;
  pswd: any;
  check: boolean = false;


  onSubmit(f:NgForm){
    console.log(f);
    f.reset();
}
}