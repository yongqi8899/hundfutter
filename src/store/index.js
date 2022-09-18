import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count:0,
  cartAddData:[],
}
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  },
  cartAdd(state){
    state.cartAddData.push(data);
  }
}
const actions = {
  increment(context){
    context.commit('INCREMENT')
  },
  decrement({commit}){
    if(state.count>0)
    commit('DECREMENT')
  },
  cartAdd({commit},data){
  commit('cartAdd',data)
  }
}

const getters = {
cartDatas(state){
  return state.cartAddData
}
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})





