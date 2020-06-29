import { Component, ErrorHandler } from '@angular/core';
import { Validacoes } from './extensions/validation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { freeApiService } from './services/free.api.services';
import { stringify } from 'querystring';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUsuario';
  public form: FormGroup;
  
ngOnInit(): void {
}
constructor(private fb:FormBuilder, private _freeApiService : freeApiService,private router: Router) 
{
  this.form = this.fb.group({
    cpf_master: ['',Validators.compose([
    Validacoes.ValidaCpf2,
    Validators.maxLength(11),
  ])]
})}


verificar()
{
  this._freeApiService.getUsuarioRegistrado(this.form.value['cpf_master'])
  .subscribe(
    data=>
    {
      localStorage.setItem('token',data.token)
      localStorage.setItem('user',stringify(data.map))
      
      this.router.navigate(['home'])

    },
    (error) => {
      localStorage.clear();
      this.router.navigate(['acesso-negado']);
    }
  );
}
}

