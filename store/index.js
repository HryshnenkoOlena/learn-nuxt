export const state = () => ({
  token: 0
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state, token) {
    state.token = null;
  }
};

export const actions = {
  nuxtServerInit() {
    console.log('nuxtServerInit');
  },
  login({ commit }) {
    commit('setToken', 'truetoken');
  },
  logout({ commit }) {
    commit('clearToken');
  }
};

export const getters = {
  hasToken: s => !!s.token
};
