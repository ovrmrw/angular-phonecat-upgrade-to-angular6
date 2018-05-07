import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';

import { downgradedComponents } from './app.downgraded-components';
import { bridgeDirectives } from './app.bridge-directives';
import { routeParamsProvider } from './ajs-upgraded-providers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [/* AppRoutingModule, */ UpgradeModule, BrowserModule, HttpClientModule, FormsModule],
  declarations: [downgradedComponents, bridgeDirectives, AppComponent, CheckmarkPipe],
  entryComponents: [downgradedComponents],
  providers: [routeParamsProvider]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp'], { strictDi: true });
  }
}
