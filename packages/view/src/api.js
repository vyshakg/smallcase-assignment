import Axios from "axios";

export const api = {
  tradeBuy: function() {
    return Axios.post("/api/").then(res => res.data);
  },
  tradeSell: function() {},
  portfolio: function() {},
  cumulative: function() {}
};
