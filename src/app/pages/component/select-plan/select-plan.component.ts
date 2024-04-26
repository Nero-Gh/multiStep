import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MultiStepFormService } from '@app/pages/services/mutiStepForm/multi-step-form.service';
import { ButtonComponent } from '@app/pages/shared/components/button/button.component';
import { InputsComponent } from '@app/pages/shared/components/inputs/inputs.component';
import { SideBarComponent } from '@app/pages/shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [
    InputsComponent,
    ButtonComponent,
    ReactiveFormsModule,
    SideBarComponent,
  ],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css',
})
export class SelectPlanComponent {
  multiStepForm!: FormGroup;
  multiStepFormService = inject(MultiStepFormService);
  router = inject(Router);

  ngOnInit(): void {
    this.multiStepForm = this.multiStepFormService.multiStepForm;
  }

  nextStep() {
    if (
      this.multiStepForm.value.name &&
      this.multiStepForm.value.email &&
      this.multiStepForm.value.phone
    ) {
      this.multiStepFormService.multiStepForm = this.multiStepForm;
      this.router.navigate(['select-plan']);
    } else {
      alert('Please fill all the fields');
    }
  }
}
