import Vue from "vue";
import Vuex from "vuex";
import AudioInfo from '@/store/modules/audio.js';
import MenuList from '@/store/modules/menulist.js';
import Sidebar from '@/store/modules/sidebar.js';
import MusicList from '@/store/modules/musiclist.js';
import Reconmmed from '@/store/modules/reconmmend.js';

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
    sideBar: Sidebar,
    audioInfo: AudioInfo,
    menuList: MenuList,
    musiclist: MusicList,
    reconmmed: Reconmmed
  }

})

export default store
