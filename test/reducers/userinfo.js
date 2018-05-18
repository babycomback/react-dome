import * as actionTypes from '../constants/userinfo'

// 初始状态
const initialState = {}

export default function userinfo(state = initialState, action){
	switch (action.types){
		// 登录
		case actionTypes.USERINFO_LOGIN:
			return action.data

		// 修改城市
		case actionTypes.UPDATE_CITYNAME:
			return action.data

		default:
			return state
	}
}