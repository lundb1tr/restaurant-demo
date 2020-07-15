import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer B3I0F4xBEiTldGviSRdGEUdLYLe6a9auGKu1J9jsZ8V5vPXzm6gEHwUfYzYgYDJaw1D03PB05AQ3wM7nGA5Z0qv7J1jE0qZBXalsqurmSLynl1cwVvQlHUHgF0oOX3Yx',
  },
});
