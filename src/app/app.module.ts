import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import {HttpClientModule} from '@angular/common/http';
import {freeApiService} from '../app/services/free.api.services';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/AuthGuard';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { HomeComponent } from './home/home.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioNovoComponent,
    AcessoNegadoComponent,
    HomeComponent,
    CadastroConcluidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),

  ],
  providers: [freeApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
