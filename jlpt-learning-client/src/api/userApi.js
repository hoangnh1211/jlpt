import Api from './Api'

const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
};

export default {
    login(user){
        return Api.post('login', user, requestOptions);
    },

    signout(){
        localStorage.removeItem("token");
    },

    create(user){
        return Api.post('create', user, requestOptions);
    }
}