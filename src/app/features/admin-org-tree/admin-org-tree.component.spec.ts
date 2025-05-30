import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrgTreeComponent } from './admin-org-tree.component';

describe('AdminOrgTreeComponent', () => {
  let component: AdminOrgTreeComponent;
  let fixture: ComponentFixture<AdminOrgTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOrgTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
