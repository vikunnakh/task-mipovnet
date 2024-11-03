import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserMenuDropDownComponent } from './components/user-menu-drop-down/user-menu-drop-down.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserMenuDropDownComponent,
    RouterModule,
    RouterLinkActive,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-mipovnet';
  public authenticationService = inject(AuthService);

  public show: boolean = false;
}
