import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
    blogs: [],
    user: null
  },
  mutations: {
    storeimages: (state, payload) => {
      state.images = payload;
    },
    storeblogs: (state, payload) => {
      state.blogs = payload;
    },
    createuser: (state, payload) => {
      state.user = payload;
    }
  },
  actions: {
    storeimages: (context, payload) => {
      context.commit("storeimages", payload);
    },
    storeblogs: (context, payload) => {
      context.commit("storeblogs", payload);
    },
    createuser: (context, payload) => {
      context.commit("createuser", payload);
    }
  },
  modules: {}
});
