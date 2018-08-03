
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidatoComponent } from './list-candidato.component';

describe('ListCandidatoComponent', () => {
  let component: ListCandidatoComponent;
  let fixture: ComponentFixture<ListCandidatoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
