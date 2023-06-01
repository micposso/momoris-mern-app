import axios from 'axios';

const URL = process.env.API_URL;

export const fetchPosts = () => axios.get(url);