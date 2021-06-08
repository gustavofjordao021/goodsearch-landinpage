import axios from "axios"

const baseURL = "https://sheet.best/api/sheets/";

const service = axios.create({
  baseURL,
});

const SUBSCRIBE_SERVICE = {
  subscribeUser(userInputs) {
    return service.post(`/${process.env.REACT_APP_SHEET_BEST_ID}`, userInputs)
  },
};

export default SUBSCRIBE_SERVICE;