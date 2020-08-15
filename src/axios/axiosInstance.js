import axios from 'axios';

const instance = axios.create({
    baseURL: "https://imissmyboyfriend-b5c47.firebaseio.com/"
})

export default instance;