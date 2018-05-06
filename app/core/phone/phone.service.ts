import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// declare var angular: ng.IAngularStatic;
// import { downgradeInjectable } from '@angular/upgrade/static';

// angular.module('core.phone').factory('Phone', ($resource: ng.resource.IResourceService) => {
//   return $resource(
//     'phones/:phoneId.json',
//     {},
//     {
//       query: {
//         method: 'GET',
//         params: { phoneId: 'phones' },
//         isArray: true
//       }
//     }
//   );
// });

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
  id: string;
  imageUrl: string;
  [key: string]: any;
}

@Injectable()
export class Phone {
  constructor(private http: HttpClient) {}

  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`phones/phones.json`);
  }

  get(id: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`phones/${id}.json`);
  }
}

// angular.module('core.phone').factory('phone', downgradeInjectable(Phone));
