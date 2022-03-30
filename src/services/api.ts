/*eslint-disable no-console */
import axios, { AxiosError } from 'axios';

interface FailedRequest {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
}

let isRefreshing = false;
let failedRequestsQueue: FailedRequest[] = [];

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@SolouChuva:token')}`,
  },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response?.data?.code === 'token.expired') {
        const token = localStorage.getItem('@SolouChuva:token');
        const originalConfig = error.config;
        let newToken: string;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .post('/refresh-token', {
              token,
            })
            .then(response => {
              newToken = response.data;

              localStorage.setItem('@SolouChuva:token', response.data);

              api.defaults.headers.common.Authorization = `Bearer ${newToken}`;
              failedRequestsQueue.forEach(request =>
                request.onSuccess(newToken),
              );
              failedRequestsQueue = [];
            })
            .catch(err => {
              console.log(err);
              failedRequestsQueue.forEach(request => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: () => {
              if (!originalConfig.headers) {
                return;
              }
              originalConfig.headers.Authorization = `Bearer ${newToken}`;
              resolve(api(originalConfig));
            },

            onFailure: (err: AxiosError) => {
              console.log('e');
              reject(err);
            },
          });
        });
      }
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);
