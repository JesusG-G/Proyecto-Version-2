import { Injectable } from '@angular/core';
import { FormGroup,ValidatorFn,AbstractControl} from '@angular/forms';
import { RegistroUsuario } from '../Interfaces/Registro';


@Injectable({
  providedIn: 'root'
})
export class ValidadorService {



  //Utilizado para validar las contraseñas
  Validaciondepatrones():ValidatorFn{
      return (control:AbstractControl):{[tecla:string]:any}=>{
        if(!control.value){
          return null!;
        }
        const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
        const validar=regex.test(control.value);
        return validar ? null!:{contrasenaInvalida:true};
      };
  }
  CompararContrasena(contrasena:string, confirContrasena:string){
    return (formulario: FormGroup): any=>{
      const controlContrasena=formulario.controls[contrasena];
      const confirmarControlContrasena=formulario.controls[confirContrasena];
      
      if(!contrasena||!confirmarControlContrasena){
        return null!;
      }
      if(confirmarControlContrasena.errors&&!confirmarControlContrasena.errors.passwordMismatch){
        return null!;
      }
      if(controlContrasena.value!==confirmarControlContrasena.value){
        confirmarControlContrasena.setErrors({passwordMismatch:true});
      }else {
        confirmarControlContrasena.setErrors(null);
      }
    }

  }
  
}
