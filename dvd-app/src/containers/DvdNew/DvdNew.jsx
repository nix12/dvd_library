import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withAlert } from 'react-alert';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { DashboardModal } from '@uppy/react';
import Input from '../../components/UI/Input/Input';
import Tabs from '../../components/Navigation/Tabs/Tabs';
import { checkValidity } from '../../shared/utility';
import * as actions from '../../store/actions/index';


const initialState = {
  newForm: {
    title: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
      },
      value: '',
      name: 'title',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    year: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
      },
      value: '',
      name: 'year',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    plot: {
      elementType: 'textarea',
      elementConfig: {
        type: '',
        rows: '10',
      },
      value: '',
      name: 'plot',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  },
  formIsValid: false,
  modalOpen: false,
};

class DvdNew extends Component {
  constructor(props) {
    super(props);
    const { newForm } = this.state;
    this.videoDataRef = React.createRef();

    this.uppy = Uppy({
      autoProceed: false,
      restrictions: {
        maxFileSize: 3000000000,
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ['video/*'],
      },
    });

    this.uppy.use(Tus, {
      endpoint: 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/files',
      chunkSize: 5 * 1024 * 1024,
      resume: true,
      autoRetry: true,
      retryDelays: [0, 1000, 3000, 5000],
    });

    this.uppy.on('complete', (result) => {
      const uploadedFileData = JSON.stringify({
        id: result.successful[0].uploadURL,
        storage: 'cache',
        metadata: {
          filename: result.successful[0].data.name,
          size: result.successful[0].data.size,
          mime_type: result.successful[0].data.type,
          title: newForm.title.value,
          year: newForm.year.value,
          plot: newForm.plot.value,
        },
      });
      const attachment = JSON.stringify({
        movie: {
          video: {
            id: result.successful[0].uploadURL,
            storage: 'cache',
            metadata: {
              filename: result.successful[0].data.name,
              size: result.successful[0].data.size,
              mime_type: result.successful[0].data.type,
              title: newForm.title.value,
              year: newForm.year.value,
              plot: newForm.plot.value,
            },
          },
        },
      });

      const hiddenInput = this.videoDataRef.current;
      hiddenInput.value = uploadedFileData;
      hiddenInput.name = attachment;
    });
  }

  state = { ...initialState };

  static getDerivedStateFromProps = (nextProps, prevState) => ({
    newForm: {
      ...prevState.newForm,
      plot: {
        ...prevState.newForm.plot,
        value: nextProps.omdb,
      },
    },
  });

  submitHandler = (event) => {
    event.preventDefault();
    const { onClearOmdb, onPostMovie } = this.props;
    const { newForm } = this.state;
    const formData = {};

    Object.keys(newForm).forEach((formElementIdentifier) => {
      if (Object.prototype.hasOwnProperty.call(newForm, formElementIdentifier)) {
        formData[formElementIdentifier] = newForm[formElementIdentifier].value;
      }
    });
    formData.video = this.videoDataRef.current.value;

    onPostMovie(formData)
      .then(() => this.showAlert())
      .then(() => {
        this.clearForm();
        onClearOmdb();
      });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const { newForm } = this.state;
    const { onGetOmdb } = this.props;

    const updatednewForm = {
      ...newForm,
    };

    const updatedFormElement = {
      ...updatednewForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation,
    );
    updatedFormElement.touched = true;
    updatednewForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    Object.keys(updatednewForm).forEach((inputIdent) => {
      if (Object.prototype.hasOwnProperty.call(updatednewForm, inputIdent)) {
        formIsValid = updatednewForm[inputIdent].valid && formIsValid;
      }
    });

    this.setState(prevState => ({
      ...prevState,
      newForm: updatednewForm,
      formIsValid,
    }),
    () => {
      onGetOmdb(newForm.title.value, newForm.year.value);
    });
  };

  modalOpenHandler = () => {
    this.setState({ modalOpen: true });
  };

  modalCloseHandler = () => {
    this.setState({ modalOpen: false });
  };

  componentWillUnmount = () => {
    const { onClearOmdb } = this.props;

    this.clearForm();
    onClearOmdb();
  }

  componentDidMount = () => {
    const { onSetAuthRedirectPath } = this.props;

    onSetAuthRedirectPath('/new');
  };

  preventDefaultAction = (event) => {
    event.preventDefault();
    this.modalOpenHandler();
  };

  showAlert = () => {
    const { error, alert } = this.props;
    const { newForm } = this.state;

    if (error === null || error.length === 0) {
      const alertSuccess = `${newForm.title.value} has been successfully saved`;

      return alert.show(alertSuccess, { type: 'success', timeout: 5000 });
    }

    if (error) {
      Object.keys(error).map(value => alert.show(`${value}: ${error[value]}`, { type: 'error' }));
    }

    return null;
  };

  clearForm = () => {
    this.setState(initialState);
  };

  formSubmissionActions = (event) => {
    event.preventDefault();
    this.submitHandler(event);
  };


  render() {
    const { modalOpen, newForm } = this.state;

    const formElementsArray = [];
    Object.keys(newForm).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(newForm, key)) {
        formElementsArray.push({
          id: key,
          config: newForm[key],
        });
      }
    });

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
        name={formElement.config.name}
        label={formElement.config.name}
        id={formElement.config.id}
      />
    ));

    return (
      <div className="container">
        <Tabs />

        <h4 className="row justify-content-center">Dvd Add Form</h4>
        <form onSubmit={this.formSubmissionActions}>
          { form }

          <input type="hidden" id="video_data" ref={this.videoDataRef} />

          <div className="form-group">
            <button onClick={this.preventDefaultAction} type="button">Select Movie</button>
            <DashboardModal
              uppy={this.uppy}
              open={modalOpen}
              closeModalOnClickOutside
              onRequestClose={this.modalCloseHandler}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

DvdNew.defaultProps = {
  error: null,
  alert: null,
};

DvdNew.propTypes = {
  onClearOmdb: PropTypes.func.isRequired,
  onPostMovie: PropTypes.func.isRequired,
  onGetOmdb: PropTypes.func.isRequired,
  onSetAuthRedirectPath: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string),
  alert: PropTypes.shape({
    type: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  error: state.movie.error,
  omdb: state.omdb.plot,
});

const mapDispatchToProps = dispatch => ({
  onPostMovie: movieData => dispatch(actions.postMovie(movieData)),
  onGetOmdb: (title, year) => dispatch(actions.getOmdb(title, year)),
  onClearOmdb: () => dispatch(actions.clearOmdb()),
  onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(DvdNew));
