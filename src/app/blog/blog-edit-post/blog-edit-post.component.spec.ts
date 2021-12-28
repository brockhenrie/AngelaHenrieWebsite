import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEditPostComponent } from './blog-edit-post.component';

describe('BlogEditPostComponent', () => {
  let component: BlogEditPostComponent;
  let fixture: ComponentFixture<BlogEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEditPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
