import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { Phone } from './core/phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';
import { AppComponent } from './app.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [/* AppRoutingModule, */ BrowserModule, UpgradeModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, PhoneListComponent, PhoneDetailComponent, CheckmarkPipe],
  entryComponents: [PhoneListComponent, PhoneDetailComponent],
  providers: [routeParamsProvider, Phone]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}
