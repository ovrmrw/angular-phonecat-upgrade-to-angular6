import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PhoneListComponent } from './phone-list.component';
import { Phone, PhoneData } from '../core/phone/phone.service';
import { Observable, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class PhoneMock {
  query(): Observable<any[]> {
    return of([{ name: 'hoge' }, { name: 'foo' }]);
  }
}

describe('PhoneListComponent', () => {
  let fixture: ComponentFixture<PhoneListComponent>;
  let component: PhoneListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PhoneListComponent],
      providers: [{ provide: Phone, useClass: PhoneMock }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('インスタンス化できる', () => {
    expect(component).toBeTruthy();
  });

  it('変数phonesに値がセットされている', () => {
    const phones = component.phones;
    expect(phones).toEqual([{ name: 'hoge' }, { name: 'foo' }] as any);
  });
});
