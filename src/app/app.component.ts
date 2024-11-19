import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
