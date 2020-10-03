import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private tokenStorage: TokenStorageService,
    public router: Router
    ) { }
  canActivate(): boolean{
    if (this.tokenStorage.getToken()) {
      return true;
    } else {
      this.router.navigate(['']);
    }
  }
}
