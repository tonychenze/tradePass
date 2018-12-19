import http from "./httpService";
const apiURL =
  "https://my-json-server.typicode.com/tonychenze/bondItem_fakeService";

function getBonds() {
  return http.get(apiURL + "/bonditems");
}

export default {
  getBonds
};
