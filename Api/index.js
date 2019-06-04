
import axios from 'axios';

const domain = 'http://yudi.co.uk/apis/NXT/';

export default class Api {
  //login
  static login(email, password) {
    return axios({
      method: 'POST',
      url:  'http://yudi.co.uk/apis/NXT/login.php',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: {
        email: email,
        password: password
      }
    });
  }
}