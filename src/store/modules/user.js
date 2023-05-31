import { resetRouter } from '@/router'
const state = {
  // token: getToken(), // 唯一token
  // caseId: getCaseId(), // 获取期次id
  name: '', // 用户名称
  //   avatar: '', // 用户头像
  //   introduction: '', // 用户介绍
  //   roles: [], // 角色列表
  //   permissions: null, // 用户权限
  userInfo: {}, // 用户详细信息
  //   caseInfo: null, // 方案信息
  //   uuid: "",
  //   signCode: getSignCode(), // 地区标识码
  //   areaCode: getAreaCode(), // 地区码
  //   areaName: getAreaName(), // 地区名称
  //   caseCode: getCaseCode(), // 方案code
  //   faceSwitch: false,// 人脸开关
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}

const actions = {
  setName({ commit }, name) {
    return new Promise((resolve, reject) => {
      commit('SET_NAME', name)
      resolve()
    })
  },
  setUserInfo({ commit }, userinfo) {
    return new Promise((resolve, reject) => {
      commit('SET_USERINFO', userinfo)
      resolve()
    })
  },
  logOut({commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      dispatch('resetToken')
      resolve()
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      // commit('SET_TOKEN', '')
      commit('SET_USERINFO', {})
      // commit('SET_PERMISSIONS', null)
      // removeToken()
      resetRouter()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
