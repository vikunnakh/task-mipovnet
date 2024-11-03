import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss',
})
export class PrivacyPolicyPageComponent {
  public http = inject(HttpClient);

  data$: Observable<any> = this.http.get(
    `${environment.apiUrl}/privacy-policy`
  );
}
