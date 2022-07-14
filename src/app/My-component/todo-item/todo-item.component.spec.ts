import { ComponentFixture, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      schemas:[
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
