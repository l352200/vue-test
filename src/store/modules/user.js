import { resetRouter } from '@/router'
import { getToken, setToken, removeToken, getCaseId, setCaseId, setCaseInfo, getSignCode, setSignCode, getAreaCode, getAreaName, setAreaCode, setAreaName, removeArea, getCaseCode, setCaseCode } from '@/utils/auth'
import { login, getUser } from '@/api/user'
const state = {
  token: getToken(), // 唯一token
  // caseId: getCaseId(), // 获取期次id
  name: '', // 用户名称
  //   avatar: '', // 用户头像
  //   introduction: '', // 用户介绍
  //   roles: [], // 角色列表
  permissions: null, // 用户权限
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
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
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
  logOut({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      dispatch('resetToken')
      resolve()
    })
  },
  login({ commit }, formData) {
    return new Promise((resolve, reject) => {
      login(formData).then(response => {
        const { token } = response
        if(token) {
          commit('SET_TOKEN', token)
          setToken(token)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      getUser().then(response => {
        let { code, stuUser, permissions } = response;
        if(code !== 0) {
          reject('验证失败，请重新登录')
        }
        stuUser = {
          ...stuUser,
          // isUpdate,
          // overdueNum
        }
        commit('SET_PERMISSIONS', permissions)
        commit('SET_USERINFO', stuUser)

        resolve(stuUser)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', {})
      commit('SET_PERMISSIONS', null)
      removeToken()
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
