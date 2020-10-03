import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryCode } from '../../../../shared/data/CountryCode';
import { GetDataService } from '../../../../services/get-data.service';
import { reqLoginBody } from '../../../../shared/data/LoginData';
import { AuthService } from '../../../../services/auth.service';
import { TokenStorageService } from '../../../../services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Code: CountryCode;
  form: reqLoginBody = {
    countryId: '',
    username: '',
    password: '',
    expiresInMinute: 0
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginForm = new FormGroup({
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(7),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12),
    ]),
  });

  constructor(
    private getDataService: GetDataService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
    ) {
    this.getCountryCode();
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        console.log(this.tokenStorage.getToken());
      // this.roles = this.tokenStorage.getUser().roles;
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.form.expiresInMinute = 2;
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.result.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(data);
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // tslint:disable-next-line:typedef
  getCountryCode() {
    this.getDataService.GetCountryCode().subscribe((data) => {
      this.Code = data;
    });
  }

  // tslint:disable-next-line:typedef
  selected(event) {
    this.form.countryId = event.value;
}

// tslint:disable-next-line:typedef
reloadPage() {
  window.location.reload();
}
}
