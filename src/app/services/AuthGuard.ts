import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';


    @Injectable()
    export class AuthGuard implements CanActivate {
      constructor(private router: Router) {}
    
      canActivate() {
        const token = localStorage.getItem('token');
        if (!token) {
          this.router.navigate(['acesso-negado']);
          return false;
        }
    
        return true;
      }
    }
