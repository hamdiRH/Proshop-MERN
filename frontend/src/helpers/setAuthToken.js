import axios from 'axios';

const setAuthToken = () => {
  if (localStorage.token) {
    axios.defaults.headers.common['Bearer'] = localStorage.token;
  } else {
    delete axios.defaults.headers.common['Bearer'];
  }
};

export default setAuthToken;
