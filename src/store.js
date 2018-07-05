import Vue from "vue";
import Vuex from "vuex";
import AudioInfo from '@/store/modules/audio.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allInfo: []
  },
  getters: {
    getAllInfo: state => state.allInfo,
    // 获取推荐歌单信息
    getFindMusic: state => state.musicAllList.findmusic
  },
  mutations: {
    setAllInfo (state, obj) {
      state.allInfo = obj
    }
  },
  actions: {
    set_AllInfo ({ commit }, obj) {
      commit('setAllInfo', obj)
    }
  },
  modules: {
    audioInfo: AudioInfo,
  }

})

export default store
