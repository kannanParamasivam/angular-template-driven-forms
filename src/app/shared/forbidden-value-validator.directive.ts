import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appForbiddenValueValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ForbiddenValueValidatorDirective,
    multi: true
  }]
})
export class ForbiddenValueValidatorDirective implements Validator {
  @Input('appForbiddenValueValidator') forbiddenVlaue: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return (this.forbiddenVlaue != null &&
      this.forbiddenVlaue.trim() != '' &&
      control.value === this.forbiddenVlaue) ? { 'forbiddenValueProvided': true } : null
  }


}
