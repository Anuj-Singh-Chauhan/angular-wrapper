// // import { ComponentFixture, TestBed } from '@angular/core/testing';

// // import { ReactWrapperComponent } from './react-wrapper.component';

// // describe('ReactWrapperComponent', () => {
// //   let component: ReactWrapperComponent;
// //   let fixture: ComponentFixture<ReactWrapperComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       imports: [ReactWrapperComponent]
// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(ReactWrapperComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });

// import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
// // import * as React from 'react';
// // import * as ReactDOM from 'react-dom/client';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from 'D:/ReactToAngular/angular-app/src/react-components/App'; // Adjust the path based on your structure

// @Component({
//   selector: 'app-react-wrapper',
//   standalone: true,
//   template: `<div id="react-root"></div>`,
//   styleUrls: ['./react-wrapper.component.scss']
// })
// export class ReactWrapperComponent implements OnInit, OnDestroy {
//   private root: ReactDOM.Root | null = null;

//   constructor(private host: ElementRef) {}

//   ngOnInit(): void {
//     // Create the React root and render the React app
//     const container = this.host.nativeElement.querySelector('#react-root');
//     this.root = ReactDOM.createRoot(container);
//     this.root.render(React.createElement(App));
//   }

//   ngOnDestroy(): void {
//     // Clean up React rendering
//     if (this.root) {
//       this.root.unmount();
//     }
//   }
// }