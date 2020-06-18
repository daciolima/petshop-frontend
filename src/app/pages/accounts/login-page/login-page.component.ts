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
  public busy: boolean = false;


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

    });

  }

  ngOnInit() {
    const token = localStorage.getItem('petshop.token');
    if (token) {
      this.busy=true;
      this
        .serviceData
        .refreshToken()
        .subscribe(
          (data: any) => {
            localStorage.setItem('petshop.token', data.token);
            this.busy = false;
          },
          (err) => {
            localStorage.clear();
            this.busy = false;
          }
        );
    }
  }

  submit() {
    this.busy = true;
    this.serviceData
    .authenticate(this.form.value)
    .subscribe((data: any) => {
      localStorage.setItem('petshop.token', data.token);
      this.busy = false;
    },
    (err) => {
      console.log(err);
      this.busy = false;
    }
    );

  }

}
