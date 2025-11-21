import ky from 'ky';

export const api = ky.extend({
  timeout: 5000,
  retry: {
    limit: 3,
    retryOnTimeout: true,
  },
  hooks: {
    beforeRequest: [
      (request, options, { retryCount }) => {
        if (retryCount === 0) {
          request.headers.set('Content-Type', 'application/json');
          request.headers.set('Accept', 'application/json');
        }
      },
    ],
  },
});
