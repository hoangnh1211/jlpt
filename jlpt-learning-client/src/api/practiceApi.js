import Api from './Api'

export default {
    getdata(path){
        return Api.get(path);
    }
}