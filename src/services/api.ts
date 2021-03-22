import axios from 'axios';
import { nanoid } from 'nanoid';
import { BACKEND_URL, KEY_API } from '../utils/const';

const apiClient = axios.create({
  baseURL: BACKEND_URL,
});

interface GetImages {
  id: string;
  error: boolean;
  message: string;
}

export const getImages = async (tag: string): Promise<GetImages> => {
  return await apiClient
    .get(`${`random?api_key=${KEY_API}&tag=${tag}`}`)
    .then(({ data }) => {
      const result = data.data;
      if (!result.id) {
        return {
          id: nanoid(),
          error: true,
          message: `По тегу "${tag}" ничего не найдено`,
        };
      }
      return Object.assign({}, result, { tag, error: false });
    })
    .catch(() => {
      return {
        id: nanoid(),
        error: true,
        message: `Произошла http ошибкa`,
      };
    });
};
