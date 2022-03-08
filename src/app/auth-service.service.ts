import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  public auntenticar(nombre: string, email: string, password: string) {
    console.log(nombre, email, password);
  }
}
