import fetchIntercept from 'fetch-intercept';
import {Alert} from 'react-native';
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
        if (response.status === 200) {
          Alert.alert('Intercept', JSON.stringify(response));
        } else {
          Alert.alert('Intercept error', JSON.stringify(response));
        }
        return response;
      },
      responseError: function(error) {
        if (error == 'TypeError: Network request failed') {
          // console.log('responseError : ', error);
          Alert.alert('Intercept error', 'Network request failed');
        }
        // Handle an fetch error
        return Promise.reject(error);
      },
    });
  }
}
export default HttpClient;
