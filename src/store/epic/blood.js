import {Observable} from "rxjs"
import {AuthActions} from "./../action/auth";
import {BloodGroup} from "./../action/request";
import {firebaseService} from './../../service/firebaseService';
import firebase from "../../config/index.js"
import {browserHistory} from "react-router";
export class BloodEpic {
    static submitRequest = (action$) => action$
        .ofType(BloodGroup.SUBMIT_REQUEST)
        .switchMap(({payload}) => {
            return Observable
                .fromPromise(firebase.database().ref().child("bloodGroup/" + payload.bloodG + "").push(payload))
                .map((user) => {
                    firebase
                        .database()
                        .ref()
                        .child("blood")
                        .push(payload);
                    browserHistory.push("dashboard/thanks")
                    return {type: BloodGroup.REQUEST_SUBMITTED, payload: true}
                })
        })
    static requestUser = (action$) => action$.ofType(BloodGroup.REQUEST_USER) //Listener
        .switchMap(({payload}) => { //complete previous inner observable return values

        return new Observable((observer) => { //Observable: represents the idea of an invokable collection of future values or events.
            //Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
            var arr = []
            payload[0].map((payload) => {
                firebase
                    .database()
                    .ref()
                    .child("bloodGroup/" + payload + "")
                    .on("value", (snapshot) => {
                        var obj = snapshot.val();
                        for (var key in obj) {
                            arr.push(obj[key])
                        }
                    })
            })
            observer.next({type: BloodGroup.REQUEST_USER_COMPLETED, payload: arr})

        })

    })
    static allUser = (action$) => action$
        .ofType(BloodGroup.ALL_USER)
        .switchMap(({payload}) => {
            return new Observable((observer) => {
                firebase
                    .database()
                    .ref()
                    .child("blood")
                    .on("value", (snapshot) => {
                        var arr = [];
                        var obj = snapshot.val();
                        for (var key in obj) {
                            arr.push(obj[key])
                        }
                        observer.next({type: BloodGroup.ALL_USER_FETCH, payload: arr})
                    })
            })
        })
}