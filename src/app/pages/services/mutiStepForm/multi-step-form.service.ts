import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MultiStepFormService {
  multiStepForm!: FormGroup;
  fb = inject(FormBuilder);

  constructor() {
    this.multiStepForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      arcade: ['', [Validators.required]],
      advanced: ['', [Validators.required]],
      pro: ['', [Validators.required]],
      onlineService: ['', [Validators.required]],
      largeStorage: ['', [Validators.required]],
      customizableProfile: ['', [Validators.required]],
    });
  }
}
