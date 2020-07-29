import { queryStringify } from '../../utils/queryStringify.js';

interface IMethods {
  [event: string]: string;
}

export class HTTPTransport {
  static METHODS: IMethods = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
  };

  public get = (url, options = {}) => {
    return this.response(
      this.request(url, { ...options, method: HTTPTransport.METHODS.GET })
    );
  };

  public post = (url, options = {}) => {
    return this.response(
      this.request(url, { ...options, method: HTTPTransport.METHODS.POST })
    );
  };

  public put = (url, options = {}) => {
    return this.response(
      this.request(url, { ...options, method: HTTPTransport.METHODS.PUT })
    );
  };

  public delete = (url, options = {}) => {
    return this.response(
      this.request(url, { ...options, method: HTTPTransport.METHODS.DELETE })
    );
  };

  public request = (url, options, timeout = 5000) => {
    const {
      method = HTTPTransport.METHODS.GET,
      data = {},
      headers = {},
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === HTTPTransport.METHODS.GET && data) {
        url = this.setParams(url, data);
      }

      xhr.timeout = timeout;

      xhr.open(method, url);

      this.setHeaders(xhr, headers);

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      switch (method) {
        case HTTPTransport.METHODS.GET:
          xhr.send();
          break;

        case HTTPTransport.METHODS.POST:
        case HTTPTransport.METHODS.PUT:
        case HTTPTransport.METHODS.DELETE:
          xhr.send(JSON.stringify(data));
          break;

        default:
          xhr.send();
          break;
      }
    });
  };

  public setHeaders = (xhr, headers) => {
    if (headers) {
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
    }
  };

  public setParams = (url, data) => {
    if (data) {
      return `${url}${queryStringify(data)}`;
    }
    return '';
  };

  public response = (response) => {
    return new Promise((resolve, reject) => {
      response
        .then((response) => {
          if (response.readyState === 4) {
            if (response.status === 200 || response.status === 201) {
              resolve(response.response);
            }
            reject(response.responseText);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

// Пример использования
// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const http = new HTTPTransport();

// console.log(queryStringify());
// console.log(queryStringify({}));
// console.log(queryStringify(456));
// console.log(
//   queryStringify({
//     key: 1,
//     key2: 'test',
//     key3: false,
//     key5: [1, 2, 3],
//     key6: {
//       a: 1
//     }
//   })
// );

// GET
// http.get(`${BASE_URL}/todos/1`).then(data => {
//   console.log(data);
// });

// GET params
// http
//   .get(`${BASE_URL}/posts`, {
//     data: {
//       userId: 1,
//       first: 3
//     }
//   })
//   .then(data => {
//     console.log(data);
//   });

// POST
// http
//   .post(`${BASE_URL}/posts`, {
//     data: {
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }
//   })
//   .then(data => {
//     console.log(data);
//   });

// PUT
// http
//   .put(`${BASE_URL}/posts/1`, {
//     data: JSON.stringify({
//       id: 1,
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//   .then(data => {
//     console.log(data);
//   });

// DELETE
// http.delete(`${BASE_URL}/posts/1`).then(data => {
//   console.log(data);
// });
