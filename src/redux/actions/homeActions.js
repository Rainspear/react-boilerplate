import { homeConstants } from 'redux/constants/'
export const getHomeInfomation = () => {
  return {
    type: homeConstants.GET_HOME_INFORMATION
  }
}

export const saveHomeInfomation = () => {
  return {
    type: homeConstants.SAVE_HOME_INFORMATION
  }
}