import { EventEmitter } from '@/shared/utils/eventEmitter';
import ky from 'ky';

export const api = ky.extend({
  timeout: 10000,
  retry: {
    limit: 1,
    retryOnTimeout: true,
  },
  hooks: {
    beforeRequest: [
      (request, options, { retryCount }) => {
        // if (request.url.includes('/file')) {
        //   request.headers.set('Content-Type', 'multipart/form-data');
        //   request.headers.set('Accept', 'multipart/form-data');
        // } else {
        //   if (retryCount === 0) {
        //     request.headers.set('Content-Type', 'application/json');
        //     request.headers.set('Accept', 'application/json');
        //   }
        // }
      },
    ],
    afterResponse: [
      (req, op, res) => {
        if (
          res.status === 401 &&
          req.url.includes('user') &&
          window.location.pathname.includes('/account')
        ) {
          EventEmitter.emit('LOGOUT');
        }
      },
    ],
  },
});
