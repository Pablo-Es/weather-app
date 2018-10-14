import {AxiosInstance as axios} from "axios";

export default class {

  static fetchAll(lat,lng) {
    return new Promise((resolve, reject) => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=ba74e775820c1854af18db066eb9d76e`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  }



}
