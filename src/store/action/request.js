export class BloodGroup {


    static SUBMIT_REQUEST = "SUBMIT_REQUEST";
    static REQUEST_SUBMITTED = "REQUEST_SUBMITTED";

    static submitRequest(payload){

        return {type:BloodGroup.SUBMIT_REQUEST,payload}
    }
    static requestSubmitted(){
        return{type:BloodGroup.REQUEST_SUBMITTED,submitted:true}
    }
}