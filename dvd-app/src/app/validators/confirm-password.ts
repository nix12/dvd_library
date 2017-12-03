import { AbstractControl } from '@angular/forms';

export const confirmPassword = (control: AbstractControl): { [key: string]: boolean } => {
  const password = control.get('password');
  const password_confirmation = control.get('password_confirmation');
  if (!password || !password_confirmation) return null;
  return password.value === password_confirmation.value ? null : { nomatch: true };
};