import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [];
  const {
    invalid,
    shouldValidate,
    touched,
    elementType,
    elementConfig,
    match,
    value,
    label,
    name,
  } = props;

  if (invalid && shouldValidate && touched) {
    inputClasses.push('is-invalid');
  }

  if (!invalid && shouldValidate && touched) {
    for (let i = 0; i < inputClasses.length; i + 1) {
      if (inputClasses[i] === 'is-invalid') {
        inputClasses.splice(i, 1);
      }
    }

    inputClasses.push('is-valid');
  }

  switch (elementType) {
  case ('input'):
    inputElement = (
      <input
        value={props.value}
        {...props.elementConfig}
        className={`${inputClasses} form-control`}
        onChange={props.changed}
        name={props.name}
        id={props.id}
      />
    );
    break;
  case ('textarea'):
    inputElement = (
      <textarea
        value={props.value}
        {...props.elementConfig}
        className={`${inputClasses} form-control`}
        onChange={props.changed}
        name={props.name}
        type={props.type}
      />
    );
    break;
  default:
    inputElement = (
      <input
        value={props.value}
        {...props.elementConfig}
        className={`${inputClasses} form-control`}
        onChange={props.changed}
        name={props.name}
        type={props.type}
      />
    );
    break;
  }

  let error = null;

  if (!/^.+@.+\..+$/.test(value)
      && touched
      && elementConfig.type === 'email') {
    error = <p className={styles.error}>E-mail is not valid</p>;
  }

  if (touched && !match && elementConfig.label === 'Password Confirmation') {
    error = <p className={styles.error}>Password confirmation must match password</p>;
  }

  if (touched && value === '' && elementConfig.type === 'email') {
    error = <p className={styles.error}>E-mail cannot be blank</p>;
  }

  if (touched && value === '' && elementConfig.type === 'password') {
    error = <p className={styles.error}>Password cannot be blank</p>;
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{ label }</label>
      { inputElement }
      { error }
    </div>
  );
};

export default input;
