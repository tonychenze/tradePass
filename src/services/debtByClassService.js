import http from "./httpService";
//const apiURL = "http://localhost:3500/api";
const apiURL =
  "https://my-json-server.typicode.com/tonychenze/bondItem_fakeService";

function getBonds() {
  return http.get(apiURL + "/bonditems");
}

export default {
  getBonds
};
