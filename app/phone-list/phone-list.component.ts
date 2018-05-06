import { Component } from '@angular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';

declare var angular: ng.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.template.html',
  styleUrls: ['./phone-list.template.scss']
})
export class PhoneListComponent {
  phones: PhoneData[];
  orderProp: string;
  query: string;

  // static $inject = ['phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) {
            return -1;
          } else if ([b[this.orderProp] < a[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return phones;
  }
}

// Register `phoneList` component, along with its associated controller and template
// angular.module('phoneList').component('phoneList', {
//   templateUrl: 'phone-list/phone-list.ajs.template.html',
//   controller: PhoneListComponent
// });

angular.module('phoneList').directive('phoneList', downgradeComponent({
  component: PhoneListComponent
}) as ng.IDirectiveFactory);
