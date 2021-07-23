import  {all, takeLatest, put} from 'redux-saga/effects'
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
} from '../reducers/index'
function* loginRequest(action){
	yield put({
		type: LOGIN_SUCCESS,
		payload:action.payload,
	})
}
function* handleLoginByUsername(){
	yield takeLatest(LOGIN_REQUEST, loginRequest)
}

const authenSaga = function* root() {
	yield all([handleLoginByUsername()])
}
export default function* rootSaga(){
	console.log('rootSaga')
	yield all([
		authenSaga()
	])
}
