import axios from 'axios';
// You can setup default config right here

const defaultConfig = {
  headers: {
    'X-Custom-Header': 'foobar'
  }
};

export default class CRUDService {
  // If no config will be passed to the class arguments, the defaultConfig will be used

  constructor(config = defaultConfig) {
    this.config = config;
  }

  async getNotes(url) {
    try {
      const response = await axios.get(url, this.config);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async postNote(url, data) {
    try {
      const response = await axios.post(url, data, this.config);
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async putNote(url, data) {
    try {
      const response = await axios.put(url, data, this.config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async deleteNote(url) {
    try {
      const response = await axios.delete(url, this.config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
