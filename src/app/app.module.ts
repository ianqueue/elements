import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent,ButtonComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('a-button', customButton);
  }

  ngDoBootstrap() {}
}
