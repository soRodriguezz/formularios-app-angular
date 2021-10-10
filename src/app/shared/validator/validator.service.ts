import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  /* Valida que el campo nombre tenga solo campos de la A a la Z de mayusculas y minusculas.
    y el + significa que no importa la cantidad de caracteres.*/
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // validacion email
    
  constructor() { }

  noPuedeSerStrider( control:FormControl ): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      // se considera error
      return {
        noStrider: true
      }
    }

    //todo esta bien
    return null;
  }

  camposIguales(campo1:string, campo2:string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      
      if(pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true};
      } 

      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }
  
}
