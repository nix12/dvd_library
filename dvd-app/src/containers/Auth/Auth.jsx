import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateObject, checkValidity } from '../../shared/utility';
import { signInUser } from '../../redux-token-auth-config';
import * as actions from '../../store/actions/index';

import classes from './Auth.module.css';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: '',
          label: 'e-mail',
        },
        value: '',
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
    },
    error: null,
  };

  componentDidMount = () => {
    const { authRedirectPath, onSetAuthRedirectPath } = this.props;

    if (authRedirectPath !== '/dvd-list') {
      onSetAuthRedirectPath();
    }
  }

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
      }),
    });

    this.setState(prevState => ({
      ...prevState,
      controls: updatedControls,
    }));
  };

  submitHandler = (event) => {
    event.preventDefault();

    const { onSignInUser, history } = this.props;
    const { controls } = this.state;
    const email = controls.email.value;
    const password = controls.password.value;

    onSignInUser({ email, password })
      .then(() => {
        history.push('/dvd-list');
      })
      .catch((err) => {
        if (err.response) {
          this.setState(prevState => ({
            ...prevState,
            error: err.response.data.errors[0],
          }));
        }
      });
  };

  render() {
    const { loading, isAuthenticated, authRedirectPath } = this.props;
    const { controls, error } = this.state;

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
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    if (loading) {
      form = <Spinner />;
    }

    let authRedirect = null;
    if (isAuthenticated) {
      authRedirect = <Redirect to={authRedirectPath} />;
    }

    return (
      <div className="row justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="col-md-4 card">
          { authRedirect }

          { error
            ? <p className={`row justify-content-center ${classes.error}`}>{ error }</p>
            : null
          }

          <form className="card-body" onSubmit={this.submitHandler}>
            { form }

            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  authRedirectPath: PropTypes.string.isRequired,
  onSetAuthRedirectPath: PropTypes.func.isRequired,
  onSignInUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedInUserId: state.reduxTokenAuth.currentUser.attributes.userId,
  loading: state.reduxTokenAuth.currentUser.isLoading,
  isAuthenticated: state.reduxTokenAuth.currentUser.isSignedIn,
  authRedirectPath: state.auth.authRedirectPath,
});

const mapDispatchToProps = dispatch => ({
  onSignInUser: ({ email, password }) => dispatch(signInUser({ email, password })),
  onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/dvd-list')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
