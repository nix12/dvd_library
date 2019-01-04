import { generateAuthActions } from 'redux-token-auth';
import { authUrl } from './constants';

const config = {
    authUrl,
    userAttributes: {
        userName: 'name',
        userId: 'id',
        email: 'email',
        password: 'password',
        passwordConfirmation: 'password_confirmation'
    }
};

const {
    signInUser,
    signOutUser,
    verifyCredentials,
} = generateAuthActions(config);

export {
    signInUser,
    signOutUser,
    verifyCredentials,
};