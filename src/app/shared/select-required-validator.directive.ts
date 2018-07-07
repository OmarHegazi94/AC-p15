import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

//  AbstractControl is the parent class of both formGroup and formControl classes
//  Form tag in HTML represented as formGroup class in angular ..
//  Other form elements represented as form control class in angular ..

@Directive({
  selector: '[appSelectValidator]',
  providers: [{
    provide: NG_VALIDATORS, // InjectionToken it contains the list of validators including the angular builtIn validator
    // Must be used it you want to use a cutom validator
    useExisting: SelectRequiredValidatorDirective,
    multi: true
  }]
})
export class SelectRequiredValidatorDirective implements Validator {
  @Input('appSelectValidator') defaultValue: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
  }
}
