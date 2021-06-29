import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://proyecto-tedw.herokuapp.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
  getMedicBoard() {
    return axios.get(API_URL + 'medic', { headers: authHeader() });
  }

  getManagerBoard() {
    return axios.get(API_URL + 'manager', { headers: authHeader() });
  }

  getReportBoard() {
    return axios.get(API_URL + 'report', { headers: authHeader() });
  }
}

export default new UserService();