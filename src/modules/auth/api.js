import axios from 'axios';
import { profileApi } from '../../utils/apiService';
import * as API from '../../constants/api';

export const fetchUserProfile = () => profileApi.get(API.USER_PROFILE_URL);
export const fetchAuthToken = () => axios.get(API.CTRL_AUTH_TOKEN_URL);
