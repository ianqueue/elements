import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button/button.component';
import { DialogTriggerComponent, DialogContentComponent } from './dialog/dialog.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, ButtonComponent, DialogTriggerComponent, DialogContentComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, MatDialogModule],
  entryComponents: [ButtonComponent, DialogTriggerComponent, DialogContentComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('a-button', customButton);

    const customDialog = createCustomElement(DialogTriggerComponent, { injector });
    customElements.define('a-trigger', customDialog);
  }

  ngDoBootstrap() {}
}
