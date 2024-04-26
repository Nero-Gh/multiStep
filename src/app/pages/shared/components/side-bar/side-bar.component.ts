import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Input() label: string = '';
  @Input() info: string = '';

  @Input() stepOne = '';
  @Input() stepOneInfo = '';
  @Input() stepTwo = '';
  @Input() stepTwoInfo = '';
  @Input() stepThree = '';
  @Input() stepThreeInfo = '';
  @Input() Last = '';
  @Input() LastInfo = '';
}
