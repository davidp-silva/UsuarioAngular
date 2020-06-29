import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario} from 'src/models/usuario.model'
import {freeApiService} from '../services/free.api.services';
import { Validacoes } from '../extensions/validation';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.css']
})
export class UsuarioNovoComponent  {

  usuarios: Usuario[];
  public token ="";
  public form: FormGroup;

  constructor(private fb:FormBuilder, private _freeApiService : freeApiService,private router: Router) {
    
    this.form = this.fb.group({
      nome: ['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(250),
        Validators.required
      ])],
      cpf: ['',Validators.compose([
        Validacoes.ValidaCpf2,
        Validators.maxLength(11),
      ])],
      email: ['',Validators.compose([
        Validators.required,
        Validators.email
      ])],
      endereco: ['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(500),
        Validators.required
      ])],
      telefone: ['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    })
  }

  ngOnInit(): void {
  }
  add()
  {

    this._freeApiService.CreateUusarioPost(this.form.value)
    .subscribe(
      data=>
      {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.setItem('token',data.token);
        localStorage.setItem('user',stringify(data.map));
        this.router.navigate(['cadastro-concluido']);
        
      }
    )
  }
}
