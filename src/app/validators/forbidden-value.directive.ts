import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, Validator, } from '@angular/forms';

export function forbiddenValueValidator(vlaueRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = vlaueRe.test(control.value);
    return forbidden ? { 'forbiddenValue': { value: control.value } } : null;
  };

  @Directive({
    selector: '[appForbiddenValue]' // [] becuase this validator is going to be used as attribute
  })
  export class ForbiddenValueDirective implements Validator {


    validate(control: AbstractControl): { [key: string]: any } | null

  }
