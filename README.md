# Upgrade AngularJS Phone Catalog Tutorial Application to Angular 6 ver.

---

## Original AngularJS tutorial app (PhoneCat)

https://github.com/angular/angular-phonecat

## PhoneCat Upgrade Tutorial

https://angular.io/guide/upgrade#phonecat-upgrade-tutorial

---

## Detail

- PhoneService, CheckmarkPipe
    - re-written as Angular manner and running on Angular.
- PhoneListComponent, PhoneDetailComponent
    - re-written as Angular manner and downgraded for the routing purpose.
- HelloComponent
    - pure AngularJS component.
- HelloBridgeDirective
    - a bridge directive in order to display pure AngularJS components in Angular world.