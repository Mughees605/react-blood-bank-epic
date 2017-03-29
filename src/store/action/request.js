export class BloodGroup {


    static SUBMIT_REQUEST = "SUBMIT_REQUEST";
    static REQUEST_SUBMITTED = "REQUEST_SUBMITTED";
    static REQUEST_USER = "REQUEST_USER";
    static REQUEST_USER_COMPLETED = "REQUEST_USER_COMPLETED";
    static ALL_USER = "ALL_USER";
    static ALL_USER_FETCH = "ALL_USER_FETCH";
    static submitRequest(payload){

        return {type:BloodGroup.SUBMIT_REQUEST,payload}
    };

    static requestSubmitted(){
        return{type:BloodGroup.REQUEST_SUBMITTED,submitted:false}
    }

    static requestUser(payload){
        return {type:BloodGroup.REQUEST_USER,payload}
    }
    static allUser(){
        return {type:BloodGroup.ALL_USER}
    }
}