import fetchIntercept from 'fetch-intercept';

class HttpClient {
  async Intercept(data) {
    return fetchIntercept.register({
      request: function(url, config) {
        console.log('request : ', url, '|', config);
        // Modify the url or config here
        return [url, config];
      },
      requestError: function(error) {
        console.log('requestError : ', error);
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
      },
      response: function(response) {
        console.log('response : ', response);
        // Modify the reponse object
        return response;
      },
      responseError: function(error) {
        console.log('responseError : ', error);
        // Handle an fetch error
        return Promise.reject(error);
      },
    });
  }
}
export default HttpClient;
