import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone, PhoneData } from '../core/phone/phone.service';

declare var angular: ng.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';
import { RouteParams } from '../ajs-upgraded-providers';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html',
  styleUrls: ['./phone-detail.template.scss']
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  // static $inject = ['RouteParams', 'phone'];
  constructor(routeParams: RouteParams, phone: Phone) {
    // const phoneId = route.snapshot.paramMap.get('phoneId');
    const phoneId = routeParams['phoneId'];
    phone.get(phoneId).subscribe(phone => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

// Register `phoneDetail` component, along with its associated controller and template
// angular.module('phoneDetail').component('phoneDetail', {
//   templateUrl: 'phone-detail/phone-detail.template.html',
//   controller: PhoneDetailComponent
// });

angular.module('phoneDetail').directive('phoneDetail', downgradeComponent({
  component: PhoneDetailComponent
}) as ng.IDirectiveFactory);
