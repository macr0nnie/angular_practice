import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfEmbedsComponent } from './pdf-embeds.component';

describe('PdfEmbedsComponent', () => {
  let component: PdfEmbedsComponent;
  let fixture: ComponentFixture<PdfEmbedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfEmbedsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfEmbedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
