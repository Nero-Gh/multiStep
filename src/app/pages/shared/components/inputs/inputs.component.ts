import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() value: string = '';
  @Input() control: FormControl | AbstractControl | any;
  @Input() id: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Input() labelClass: string = '';
  @Input() onClick: () => void = () => {};
  @Input() errorType: string = 'required';
  @Input() errorMessage: string = '*Field is required';
  maxDate: string = '';
  constructor() {}
  ngOnInit(): void {
    if (this.control) {
      this.control.valueChanges.subscribe((value: string) => {
        this.value = value;
      });
    }
    if (this.disabled === true) {
      this.control.disable();
    }
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }
  public showErrorMessage(): boolean {
    if (this.control) {
      return (
        this.control.hasError(this.errorType) &&
        (this.control.dirty || this.control.touched)
      );
    }
    return false;
  }
  public classError(): string {
    if (this.control) {
      return this.control.hasError(this.errorType) &&
        (this.control.dirty || this.control.touched)
        ? 'error'
        : '';
    }
    return '';
  }
  public preventLeadingSpace(event: KeyboardEvent): void {
    if (
      event.key === ' ' &&
      (event.target as HTMLInputElement).selectionStart === 0
    ) {
      event.preventDefault();
    }
  }
}
