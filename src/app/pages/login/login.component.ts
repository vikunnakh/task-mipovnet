import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private _router = inject(Router);
  private _authenticationService = inject(AuthService);

  public show: boolean = false;
  public success: boolean = false;

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public error!: { message: string };

  ngOnInit(): void {}

  login() {
    this._authenticationService.logIn(this.form.value).subscribe({
      next: ({ accessToken }) => {
        if (accessToken) {
          this.success = true;
          setTimeout(() => {
            this._router.navigateByUrl('/profile');
          }, 1000);
        }
      },
      error: ({ error }) => {
        this.error = error;
      },
    });
  }
}
