import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { AuthGuard } from './services/AuthGuard';
import { AppComponent } from './app.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { HomeComponent } from './home/home.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';


const routes: Routes = [

{
  path: 'usuario-novo',
    component: UsuarioNovoComponent,
    data: { title: 'Adicionar Usuario' },
},
  {
  path: '',
  canActivate: [AuthGuard],
  component: HomeComponent,
},

{
path: 'home',
canActivate: [AuthGuard],
component:HomeComponent
},
{
  path: 'acesso-negado',
  component:AcessoNegadoComponent
},
{
  path: 'cadastro-concluido',
    component: CadastroConcluidoComponent,
    data: { title: 'Cadastro Concluído.' },
    canActivate: [AuthGuard],
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
