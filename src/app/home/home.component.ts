import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/free.api.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    boasvindas = '';
  constructor(private _freeApiService : freeApiService,private router: Router) { 

    this._freeApiService.getTodosTeste().subscribe
    (
      data =>
      {
          this.boasvindas = data.boasvindas;
      }, (error) => {

        localStorage.clear();
        this.router.navigate(['acesso-negado']);
      }
    );
    }

  ngOnInit(): void {

  }

}
