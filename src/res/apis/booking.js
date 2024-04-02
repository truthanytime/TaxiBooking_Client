import axios from "axios";

const config = {
    baseURL: `${process.env.REACT_APP_BASE_URL}/api/customer/`,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
};
const ServerAPI = axios.create(config);
const authInterceptor = (config) => {
    const token = localStorage.getItem("wingToken");
    if (!!token) config.headers.Authorization = token;
    return config;
};
ServerAPI.interceptors.request.use(authInterceptor);
ServerAPI.interceptors.response.use((response) => {
    return response;
}, (error) => { // Anything except 2XX goes to here
    const status = error.response?.status || 500;
    if (status === 401) {
        localStorage.removeItem('wingToken');
        localStorage.removeItem('authenticated')
        window.location = window.location.protocol + "//" + window.location.host + "/login"
    } else {
        return Promise.reject(error); // Delegate error to calling side
    }
});
const getBookInfo = id => {
    return ServerAPI.get(`book/${id}`);
}
const bookRegular = (data) => {
    return ServerAPI.post('book', { data });
}

const bookOneTime = (data) => {
    return ServerAPI.post('book-in', { data });
}

const BookingAPI = {
    getBookInfo,
    bookRegular,
    bookOneTime
}

export default BookingAPI;