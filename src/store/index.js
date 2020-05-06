import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    blogs: []
  },
  mutations: {
    storeimages: (state, payload) => {
      state.images = payload;
    },
    storeblogs: (state, payload) => {
      state.blogs = payload;
    }
  },
  actions: {
    storeimages: (context, payload) => {
      context.commit("storeimages", payload);
    },
    storeblogs: (context, payload) => {
      context.commit("storeblogs", payload);
    }
  },
  modules: {}
});
