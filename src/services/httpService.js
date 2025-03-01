import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
          { withCredentials: true }
        );
        if (data) return api(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
);

const http = {
  get: api.get,
  post: api.post,
  put: api.put,
  patch: api.patch,
  delete: api.delete,
};

export default http;
