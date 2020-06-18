import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;


  constructor(
    private serviceData: DataService,
    private fb: FormBuilder
  ) { 

    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.required
      ])]

    })

  }

  ngOnInit() {
  }

  submit() {
    this.serviceData
    .authenticate(this.form.value)
    .subscribe((data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
    );

  }

}
