import { EmailValidatorService } from './../../../shared/validator/email-validator.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this._vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this._vs.emailPattern)], [this._ev]],
    username: ['', [Validators.required, this._vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmar: ['', [Validators.required]],
  },{
    validators: [this._vs.camposIguales('password', 'confirmar')]
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.required){
      return 'El campo es requerido';
    } else if( errors?.pattern){
      return 'El formato no es valido';
    } else if( errors?.emailExists){
      return 'El email ya esta en uso';
    }else{
      return '';
    }
  }

  constructor( private _fb: FormBuilder, private _vs: ValidatorService, private _ev: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sebastian Rodriguez',
      email: 's@gmail.com',
      username: 'canibal',
      password: '123456',
      confirmar: '123456',
    });
  }

  campoNoValido( campo:string) {
    // muestra el error si el campo es invalido y fue tocado
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }



  submitFormulario(){
    console.log(this.miFormulario.value);
    // toca y destoca los campos del formulario
    this.miFormulario.markAllAsTouched();
  }

}
