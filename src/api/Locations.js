export default class {
  static getBaseUrl() {
    return  ``
  }

  static fetchAll() {
    return new Promise((resolve, reject) => {
      axios.get(this.getBaseUrl())
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  }



}
