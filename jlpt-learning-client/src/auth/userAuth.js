
import cookie from 'js-cookie';

export const getUserToken = () => {
    return cookie.get('userToken');
}

export const setUserToken = (token) => {
    return cookie.set('userToken', token);
}

export const clearUserToken = (callback) => {
    cookie.remove('userToken');
    return callback();
    
}

export const isLogin = () => {
    const token = getUserToken();
    return token ? true : false;
}