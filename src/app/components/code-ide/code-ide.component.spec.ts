import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeIDEComponent } from './code-ide.component';

describe('CodeIDEComponent', () => {
  let component: CodeIDEComponent;
  let fixture: ComponentFixture<CodeIDEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeIDEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
