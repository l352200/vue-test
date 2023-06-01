import Cookies from 'js-cookie'
import { MessageBox } from 'element-ui'
import router from '@/router'
import store from '@/store'

const TokenKey = 'vue-test-token'; // 用户token
const CASE_ID = 'case-id' // 方案id
const CASE_INFO = 'case-info' // 方案详情
const AREA_CODE = 'area-code' // 地区code
const AREA_NAME = 'area-name' // 地区名称
const SIGN_CODE = 'sign-code' // 地区标记
const CASE_CODE = 'case-code' // 方案标记
const IS_ENCRYPTION = 'IS_ENCRYPTION' //是否需要加密

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {
    expires: 0.04
  })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 选择招聘地区操作
export function getSignCode() {
  return Cookies.get(SIGN_CODE)
}
export function setSignCode(code) {
  return Cookies.set(SIGN_CODE, code)
}
export function getAreaCode() {
  return Cookies.get(AREA_CODE)
}
export function setAreaCode(code) {
  return Cookies.set(AREA_CODE, code)
}
export function getAreaName() {
  return Cookies.get(AREA_NAME)
}
export function setAreaName(name) {
  return Cookies.set(AREA_NAME, name)
}
export function removeArea() {
  Cookies.remove(AREA_CODE)
  Cookies.remove(AREA_NAME)
  Cookies.remove(SIGN_CODE)
}

// 期次操作
export function getCaseCode() {
  return Cookies.get(CASE_CODE)
}
export function setCaseCode() {
  return Cookies.set(CASE_CODE)
}
export function getCaseId() {
  return Cookies.get(CASE_ID)
}
export function setCaseId(id) {
  return Cookies.set(CASE_ID, id)
}
export function removeCaseId() {
  return Cookies.remove(CASE_ID)
}

export function getCaseInfo() {
  return Cookies.get(CASE_INFO)
}
export function setCaseInfo(caseInfo) {
  return Cookies.set(CASE_INFO, caseInfo)
}

export function removeCase() {
  Cookies.remove(CASE_ID)
  Cookies.remove(CASE_INFO)
  Cookies.remove(CASE_CODE)
}

// 判断是否登录
export function checkLogin() {
  if(store.getters.token) {
    return true;
  } else {
    MessageBox.confirm("请先登录账号，再进行下一步操作！", "温馨提示", {
      type: "warning",
      confirmButtonText: "立即登录",
      cancelButtonText: "我再看看"
    }).then(() => {
      router.push('/login')
    }).catch(() => { })
  }
}


export function getEncryption() {
  return Cookies.get(IS_ENCRYPTION)
}

export function setEncryption(code) {
  return Cookies.set(IS_ENCRYPTION, code)
}

export function removeEncryption() {
  return Cookies.remove(IS_ENCRYPTION)
}