import Api from '../common/api';
import { USER } from '../common/urls';

export const login = data => Api.post(USER.LOGIN, data);

export default userService = {
    login,
}