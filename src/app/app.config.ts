import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { hu_HU, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hu from '@angular/common/locales/hu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

registerLocaleData(hu);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNzI18n(hu_HU), importProvidersFrom(FormsModule), importProvidersFrom(HttpClientModule), provideAnimations()]
};
