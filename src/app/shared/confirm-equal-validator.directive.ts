import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true
    }
  ]
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input() appConfirmEqualValidator: string;
  validate(confirmPassword: AbstractControl): { [key: string]: any } | null {
    // get the value of the confirm password field and store it inside a const
    const password = confirmPassword.parent.get(this.appConfirmEqualValidator);
    // check if the value of password and confirm password are equal
    if (password && password.value !== confirmPassword.value ) {
      return { 'notEqual': true };
      // if there is a validation error angular will attach 'notEqual' key to individual form groups
    }
    // if both of the values are true return null
    return null;
  }
}
