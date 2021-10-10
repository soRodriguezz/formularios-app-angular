
  // TODO: 

import { FormControl } from "@angular/forms";

  /* Valida que el campo nombre tenga solo campos de la A a la Z de mayusculas y minusculas.
    y el + significa que no importa la cantidad de caracteres.*/
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // validacion email



 // validacion del username
export const noPuedeSerStrider = ( control:FormControl ) => {
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