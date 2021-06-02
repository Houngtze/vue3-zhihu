import { createStore } from 'vuex'

const store = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state:any) {
      state.count++;
    },
  },
  actions: {
    increment(context:any) {
      context.commit("increment");
    },
  }
}

export default createStore(store)