import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-menu-drop-down',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user-menu-drop-down.component.html',
  styleUrl: './user-menu-drop-down.component.scss',
})
export class UserMenuDropDownComponent {
  authenticationService = inject(AuthService);

  toggle: boolean = false;
}
