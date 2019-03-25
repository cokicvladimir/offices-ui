import axios from 'axios';
/*
    1.
    Best practice for handling api url is to use .env variables
    https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
    2.
    This file should be named http.js or something more general network related name.
 */
export default axios.create({
    baseURL: 'https://itk-exam-api.herokuapp.com/api'
});
