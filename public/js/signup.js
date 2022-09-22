/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (
    name,
    email,
    password,
    passwordConfirm
) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/signup',
            data: {
                name,
                email,
                password,
                passwordConfirm,
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', `Create successfully!`);
            window.setTimeout(() => {
                window.location.replace('/me');
            }, 1000);
        }
    } catch (err) {
        console.log(JSON.stringify(err, null, 2))
        showAlert('error', err.message);
        console.log(err.response.data.message);
    }
};