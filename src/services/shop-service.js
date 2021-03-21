import axios from "axios";

export class ShopService {
  constructor(queryParams) {
    this.api = axios.create({
      baseURL: "https://murmuring-tor-81614.herokuapp.com/api/",
    });
    if (queryParams) {
      this.api.defaults.params = queryParams;
    }

    this.api.interceptors.response.use(
      (response) => {
        // Обработка ответа
        return response.data;
      },
      (error) => {
        // Обработка ошибок
        if (error.response) {
          alert(error.response.data.message || "Что то пошло не так");
        } else {
          alert("Не удалось соединиться с сервером");
        }
        return Promise.reject(error);
      }
    );
  }

  async getAllGoods() {
    if (!this.goods) {
      this.goods = await this.api.get("goods");
    }
    return this.goods;
  }
}
