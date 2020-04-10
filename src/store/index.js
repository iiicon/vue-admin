import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import tagView from "./modules/tagView";
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    settings,
    tagView,
    user
  },
  getters
})
