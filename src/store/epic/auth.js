import { Observable } from "rxjs"
import { AuthActions } from "./../action/auth";
import { BloodGroup } from "./../action/request";
import { firebaseService } from './../../service/firebaseService';
import firebase from "../../config/index.js"
import { browserHistory } from "react-router";

export class AuthEpic {

    static signup = (action$) => action$
        .ofType(AuthActions.SIGNUP_START)
        .switchMap(({ payload }) => {

            // console.log("Credentials ", payload);
            return Observable
                .fromPromise(firebaseService.signup(payload.email, payload.password))
                .map((authUser) => {
                    browserHistory.push("http://localhost:3000/login")
                    return { type: AuthActions.SIGNUP_SUCCESSFUL, payload: authUser };
                })
                .catch(function (error) {
                    console.error(error.code, error.message);
                    return Observable.of({ type: AuthActions.SIGNUP_REJECTED, payload: error });
                })
        })

    static login = (action$) => action$
        .ofType(AuthActions.LOGIN)
        .delay(1000)
        .switchMap(({ payload }) => {

            // console.log("Credentials ", payload);
            return Observable
                .fromPromise(firebaseService.login(payload.email, payload.password))
                .map((authUser) => {
                    return { type: AuthActions.LOGIN_SUCCESSFUL, payload: authUser };
                })
                .catch(function (error) {
                    console.error(error.code, error.message);
                    return Observable.of({ type: AuthActions.LOGIN_REJECTED, payload: error });
                })
        })
    static isLogin = (action$) => action$
        .ofType(AuthActions.ISLOGGEDIN)
        .switchMap(({ payload }) => {
            return Observable
                .fromPromise(firebaseService.getUser())
                .map((user) => {
                    if (user) {
                        return { type: AuthActions.ISLOGGEDIN_SUCCESSFUL, payload: user }
                    } else {
                        return { type: AuthActions.ISLOGGEDIN_FAIL }
                    }
                })
        })
    static logout = (action$) => action$
        .ofType(AuthActions.LOGOUT)
        .switchMap(({ payload }) => {

            return Observable
                .fromPromise(firebaseService.logout())
                .map((loggedout) => {
                    console.log("loggedout: ", loggedout)
                    browserHistory.replace("login")
                    return { type: AuthActions.LOGOUT_SUCCESSFUL };
                })
                .catch(function (error) {
                    console.error(error.code, error.message);
                    return Observable.of({ type: AuthActions.LOGOUT_REJECTED, payload: error });
                })
        })
}

