import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ReactWrapperComponent } from './app/react-wrapper/react-wrapper.component';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [],
}).then(() => {
  console.log('ReactWrapperComponent ready!');
});