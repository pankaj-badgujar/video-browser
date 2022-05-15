import axios from 'axios';

const KEY = 'AIzaSyARRAe-Y4Hjt-i2rvELJMcS3-uTNhnwDgM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
