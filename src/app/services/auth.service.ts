import { CanActivate, Router } from '@angular/router';
import { Security } from '../utils/security.util';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService implements CanActivate {

    constructor(
        private router: Router
    ) {}

    // Método verifica se há token válido, caso contrário redireciona para o /login
    canActivate() {
        const token = Security.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
