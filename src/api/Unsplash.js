import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 4pq8D1q3pWOhupzJBYNkwclKHXaED3VP71iOu6VH6mU"
    }
});
