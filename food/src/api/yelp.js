import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0ySRXtA7hWHDikilbEqUq26eUoW_-E-okbnBEVJ8TM2xXsjRLctTD-Un-ZgQNgSMFpfH9elph9LmmrGuXzQ_0lrTuwBsRX0PAOP7tPVZ4uEoW2DAL9hXQS8lyv42Y3Yx'
    }
});

