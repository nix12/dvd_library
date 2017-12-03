import { AbstractControl, Validators } from '@angular/forms';

export const emptyEmail = (control: AbstractControl) => {
	const email = control.get('email');
	if (!email.value) {
		email.setValidators([])
	} else {
		email.setValidators([Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]);
	}
}