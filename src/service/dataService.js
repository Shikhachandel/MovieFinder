import axios from 'axios';

const API_URL = 'http://localhost:5500';

const UserService = {
  isLoggedIn: false,
  username: '',

  login: async (userData) => {
    try {
        // console.log(userData);
        const response = await axios.post(`${API_URL}/login`, userData);
        UserService.isLoggedIn = true;
        UserService.username = userData.username;
        return response.data;
    } catch (error) {
      console.log(error)
        throw error.response.data;
    }
  },
  
  signup: async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        UserService.isLoggedIn = true;
        UserService.username = userData.username;
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
  },

  watchList: async (data) => {
    try{
      const newMovie = {
        username: UserService.username,
        title: data.title,
        movie_id: data.id,
        poster: data.poster
      }
      const response = await axios.post(`${API_URL}/watchlist/${UserService.username}`, newMovie);
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  },

  getWatchlist: async () => {
    try{
      const response = await axios.get(`${API_URL}/watchlist/${UserService.username}`);
      console.log(response);
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  },

  bookmark: async (data) => {
    try{
      const newMovie = {
        username: UserService.username,
        title: data.title,
        movie_id: data.id,
        poster: data.poster
      }
      const response = await axios.post(`${API_URL}/bookmarks/${UserService.username}`, newMovie);
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  },

  getBookmarks: async () => {
    try{
      const response = await axios.get(`${API_URL}/bookmarks/${UserService.username}`);
      return response.data;
    }
    catch(error){
      throw error.response.data;
    }
  },
  
  logout: () => {
    UserService.isLoggedIn = false;
  },

};

export default UserService;
