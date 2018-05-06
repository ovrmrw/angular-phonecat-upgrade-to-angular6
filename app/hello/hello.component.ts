import { Directive, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'app-hello'
})
export class HelloBridgeDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('appHello', elementRef, injector);
  }
}
