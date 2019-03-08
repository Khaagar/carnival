import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingSheetComponent } from './baking-sheet.component';

describe('BakingSheetComponent', () => {
  let component: BakingSheetComponent;
  let fixture: ComponentFixture<BakingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakingSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
