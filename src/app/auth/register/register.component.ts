import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registreForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authservice: AuthService) {}

  ngOnInit(): void {
    this.registreForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public crearUsuario() {
    console.log(this.registreForm);
    console.log(this.registreForm.valid);
    console.log(this.registreForm.value);
  }

  get nombre() {
    if (this.registreForm.valid) {
      const { nombre, correo, password } = this.registreForm.value;
      this.authservice.crearUsuario(nombre, correo, password);
    }
    return this.registreForm.get('nombre');
  }
}
