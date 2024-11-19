// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-react-wrapper',
//   standalone: true,
//   imports: [],
//   templateUrl: './react-wrapper.component.html',
//   styleUrl: './react-wrapper.component.css'
// })
// export class ReactWrapperComponent {

// }
import { Component, ElementRef, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'D:/ReactToAngular/angular-app/src/react-components/App'; // Adjust the path based on your structure

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  template: `<div id="react-root"></div>`,
  styleUrls: ['./react-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  private root: ReactDOM.Root | null = null;

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    // Create the React root and render the React app
    const container = this.host.nativeElement.querySelector('#react-root');
    this.root = ReactDOM.createRoot(container);
    this.root.render(React.createElement(App));
  }

  ngOnDestroy(): void {
    // Clean up React rendering
    if (this.root) {
      this.root.unmount();
    }
  }
}
