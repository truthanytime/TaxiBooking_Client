import axios from "axios";
import Swal from "sweetalert2";

const config = {
    baseURL: `${process.env.REACT_APP_BASE_URL}/api/auth/`,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
};
const ServerAPI = axios.create(config);
const authInterceptor = (config) => {
    const token = localStorage.getItem("sigmaToken");
    if (!!token) config.headers.Authorization = token;
    return config;
};
ServerAPI.interceptors.request.use(authInterceptor);
ServerAPI.interceptors.response.use((response) => {
    return response;
}, (error) => { // Anything except 2XX goes to here
    const status = error.response?.status || 500;
    if (status === 401) {
        localStorage.removeItem('sigmaToken');
        localStorage.removeItem('authenticated')
        window.location = window.location.protocol + "//" + window.location.host + "/login"
    } else {
        return Promise.reject(error); // Delegate error to calling side
    }
});
const signin = (data) => {
    console.log(data);
    return ServerAPI.post('signin', data);
}
// router.post("/tradingAccount",[authJwt.verifyToken ], AccountController.createTradingAccount);
const signup = (data) => {
    return ServerAPI.post('signup', data);
}

// router.post("/transfer",[authJwt.verifyToken ], AccountController.internalTransfer);
const verify = (data) => {
    return ServerAPI.post('verify', data);
}

// router.get("/transaction",[authJwt.verifyToken ], AccountController.getTradingAccountTransactions);
const resetPassword = (data) => {
    return ServerAPI.post('reset-password', data);
}

const signinWithToken = (token) => {
    return ServerAPI.post('signinWithToken', { token });
}

const sendVerificationCode = () => {
    return ServerAPI.post('send-verify-code');
}
const resendEmail = (email) => {
    return ServerAPI.post('resend-email', { email });
}
const signInWithGoogle = (data) => {
    return ServerAPI.post('google-signin', { ...data });
}
const signUpWithGoogle = (data) => {
    return ServerAPI.post('google-signup', { ...data });
}
const AuthAPI = {
    signin,
    signup,
    verify,
    resetPassword,
    signinWithToken,
    sendVerificationCode,
    resendEmail,
    signInWithGoogle,
    signUpWithGoogle
}

export default AuthAPI;