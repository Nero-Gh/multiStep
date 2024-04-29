import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MultiStepFormService } from '@app/pages/services/mutiStepForm/multi-step-form.service';
import { ButtonComponent } from '@app/pages/shared/components/button/button.component';
import { InputsComponent } from '@app/pages/shared/components/inputs/inputs.component';

@Component({
  selector: 'app-summery',
  standalone: true,
  imports: [InputsComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './summery.component.html',
  styleUrl: './summery.component.css',
})
export class SummeryComponent {
  multiStepForm!: FormGroup;
  multiStepFormService = inject(MultiStepFormService);
  router = inject(Router);

  ngOnInit(): void {
    this.multiStepForm = this.multiStepFormService.multiStepForm;
  }

  nextStep() {
    // if (
    //   this.multiStepForm.value.name ||
    //   this.multiStepForm.value.email ||
    //   this.multiStepForm.value.phone
    // ) {
    this.multiStepFormService.multiStepForm = this.multiStepForm;

    // }
    // else {
    //   alert('Please fill all the fields');
    // }
  }

  goBack() {
    this.router.navigate(['add-ons']);
  }
}
