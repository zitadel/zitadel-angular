import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';


@Injectable({
    providedIn: 'root',
})
export class AuthGuard  {
    constructor(private auth: AuthenticationService) { }

    public canActivate(
        _: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | Promise<any> | boolean {
        if (!this.auth.authenticated) {
            return this.auth.authenticate();
        }
        return this.auth.authenticated;
    }

}
