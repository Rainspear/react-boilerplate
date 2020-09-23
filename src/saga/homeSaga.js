import { put } from "redux-saga/effects";
import {homeActions} from 'redux/actions'

export function* getHomeInfomation(payload) {
  try {
    yield put(homeActions.saveHomeInfomation())
  } catch (error) {
  console.log("function*getHomeInfomation -> error", error)

  }
}