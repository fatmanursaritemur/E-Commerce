import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AccountService } from "src/app/services/account.service";


@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private accoutService: AccountService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.accoutService.isLoggedIn();
        if (logged) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }

}