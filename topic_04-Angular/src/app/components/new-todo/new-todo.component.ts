import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  constructor() {}
  todoForm: FormGroup;
  maxDescriptionLength: number = 8;
  blockedTitles: string[] = ['Bad', 'Title', 'Ivan'];
  // displayFormError: string;

  ngOnInit(): void {
    console.log('New Todo Component rendered!');
    this.initForm();
  }

  initForm() {
    this.todoForm = new FormGroup({
      todoTitle: new FormControl('', [
        Validators.required,
        this.blockedNamesValidation,
      ]),
      todoDescription: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxDescriptionLength),
      ]),
      todoDate: new FormControl('', Validators.required),
      expenses: new FormArray([]),
    });
  }

  onSubmitEvent() {
    console.log(this.todoForm);
    const { todoTitle, todoDescription, todoDate } = this.todoForm.value;
    // if (this.todoForm.invalid) {
    //   this.displayFormError = 'Please enter all fields properly!';
    // }
  }

  getExpensesControls(): AbstractControl[] {
    return (<FormArray>this.todoForm.get('expenses')).controls;
  }

  blockedNamesValidation = (
    control: FormControl
  ): { [key: string]: boolean } | null => {
    // console.log(this);
    if (this.blockedTitles.includes(control.value)) {
      return { wordIsForbidden: true };
    }
    return null;
  };

  onAddExpense() {
    const control = new FormControl('', Validators.required);
    // This isn't going to work
    // this.todoForm.expenses.push(control);
    (<FormArray>this.todoForm.get('expenses'))?.push(control);
  }
}

// Form States
// Touched vs. Untouched - Whether it was clicked in/out
// Dirty vs. Pristine
// Invalid vs. Valid
