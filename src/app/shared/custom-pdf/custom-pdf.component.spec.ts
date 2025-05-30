import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomPdfComponent } from './custom-pdf.component';

describe('CustomPdfComponent', () => {
  let component: CustomPdfComponent;
  let fixture: ComponentFixture<CustomPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
