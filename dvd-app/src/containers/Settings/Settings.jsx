import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';
import { updateObject, checkValidity, checkPasswordMatch } from '../../shared/utility';

import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class Settings extends Component {
  constructor(props) {
    super(props);
    const { email } = props;

    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: '',
            label: 'e-mail',
          },
          value: email,
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: '',
            label: 'password',
          },
          value: '',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: false,
          touched: false,
        },
        passwordConfirmation: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: '',
            label: 'Password Confirmation',
          },
          value: '',
          validation: {
            required: true,
            minLength: 6,
          },
          valid: false,
          touched: false,
          match: false,
        },
      },
    };
  }


  componentDidMount = () => {
    const { onSetAuthRedirectPath } = this.props;

    onSetAuthRedirectPath('/settings/:id');
  };

  showAlert = () => {
    const { error, alert } = this.props;

    if (error === null || error.length === 0) {
      const alertSuccess = 'Account has been successfully saved';

      return alert.show(alertSuccess, { type: 'success', timeout: 5000 });
    }

    if (error) {
      Object.keys(error).map(value => alert.show(error[value], { type: 'error' }));
    }

    return null;
  };

  inputChangedHandler = (event, controlName) => {
    const { controls } = this.state;

    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation,
        ),
        touched: true,
        match: checkPasswordMatch(
          controls.password.value, event.target.value,
        ),
      }),
    });

    this.setState(prevState => ({
      ...prevState,
      controls: updatedControls,
    }),
    () => controls.passwordConfirmation.match);
  };

  clearForm = () => {
    const { controls } = this.state;

    this.setState(prevState => ({
      ...prevState,
      controls: {
        ...controls,
        password: {
          ...controls.password,
          value: '',
          touched: false,
        },
        passwordConfirmation: {
          ...controls.passwordConfirmation,
          value: '',
          touched: false,
        },
      },
    }));
  }

  submitHandler = (event) => {
    const { onUpdate } = this.props;
    const { controls } = this.state;

    event.preventDefault();
    onUpdate(
      controls.email.value,
      controls.password.value,
      controls.passwordConfirmation.value,
    )
      .then(() => this.showAlert())
      .then(() => this.clearForm());
  };

  render() {
    const { loading } = this.props;
    const { controls } = this.state;

    const formElementsArray = [];
    Object.keys(controls).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(controls, key)) {
        formElementsArray.push({
          id: key,
          config: controls[key],
        });
      }
    });

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        label={formElement.config.elementConfig.label}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        match={formElement.config.match}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    if (loading) {
      form = <Spinner />;
    }

    return (
      <React.Fragment>
        <h1 className="row justify-content-center">Settings</h1>
        <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
          <div className="col-md-4 card">
            <form className="card-body" onSubmit={this.submitHandler}>
              { form }

              <button className="btn btn-primary btn-block" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Settings.defaultProps = {
  error: null,
  loading: false,
};

Settings.propTypes = {
  email: PropTypes.string.isRequired,
  onSetAuthRedirectPath: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string),
  alert: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error,
  email: state.reduxTokenAuth.currentUser.attributes.email,
});

const mapDispatchToProps = dispatch => ({
  onUpdate: (email, password, passwordConfirmation) => dispatch(
    actions.update(email, password, passwordConfirmation),
  ),
  onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(Settings));
