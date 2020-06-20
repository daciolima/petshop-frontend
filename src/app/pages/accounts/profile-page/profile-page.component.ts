import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private serviceData: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      // Passando apenas o valor
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      // Passando o valor entre chaves e outras propriedade html
      document: [{ value: '', disabled: true }],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
    });
  }

  // Método é executado depois que todos os elementos do component está construídos.
  // Preenchendo formulario.
  ngOnInit() {
    this.busy = true;
    this
      .serviceData
      .getProfile()
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.form.controls['name'].setValue(data.name);
          this.form.controls['document'].setValue(data.document);
          this.form.controls['email'].setValue(data.email);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

  submit() {
    this.busy = true;
    this
      .serviceData
      .updateProfile(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Atualização Completa!');
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

}
