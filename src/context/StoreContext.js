import createDataContext from './createDataContext';
import marketApi from '../api/Market';
// import {useNavigation} from 
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {navigate} from '../RootNavigation'
import * as RootNavigation from '../navigationRef'
import { CommonActions } from '@react-navigation/native';
// import axios from 'axios';
// const navigation = useNavigation()
const authReducer = (state, action) => {
    switch (action.type) {
        case 'switch_app':
            return { ...state, appStatus: action.payload }
        case 'set_status':
            return { ...state, appStatus: action.payload }
        case 'show_top_bar':
            return { ...state, showTopBar: true }
        case 'set_market':
            return {
                ...state, departments2: action.payload.departments,
                currency: action.payload.currency,
                appStatus: action.payload.status,
                marketId: action.payload.id, showTopBar: true,
                marketName: action.payload.name,
                //  loan:action.payload.loan
                loan: 1000
            }
        case 'set_departments':
            return { ...state, departments2: action.payload }
        // return { ...state, departments2: []}
        case 'add_department':
            return { ...state, departments2: [...state.departments2, { name: action.payload, products: [] }] }
        case 'add_department_error':
            return { ...state, addDepErr: 'There is a Department with the same name' }
        case 'delete_department':
            return { ...state, departments2: state.departments2.filter(dep => dep.name !== action.payload) }
        case 'test':
            return { ...state, test: !state.test }
        case 'clear_add_dep_err':
            return { ...state, addDepErr: '' }
        case 'add_token':
            return { ...state, token: action.payload }
        case 'clear_error':
            return { ...state, errorMessage: '' }
        case 'auto_login':
            return { ...state, token: action.payload }
        case 'signout':
            return { token: null, errorMessage: '' }
        case 'set_firebase':
            return { ...state, firebase: action.payload }
        default:
            return state;
    }
};

// if (appStatus == false) {
//     appState = 0
// }
// else {
//     appState = 1
// }
// const getVisitors = dispatch => async () => {
//     dispatch({ type: 'visitor_loading', payload: true })
//     const firebase = await AsyncStorage.getItem('firebase')
//     if (firebase) {
//         try {

//             const response = await marketApi.post('/marketgetvisitors', { firebase })
//             dispatch({ type: 'visitor_loading', payload: false })
//         } catch (e) {
//             dispatch({ type: 'visitor_loading', payload: false })
//             throw e
//         }

//     }
// }


const changeContext = dispatch => async () => {
    dispatch({ type: 'test' })
}
const switchApp = dispatch => async (appStatus) => {
    // let appState
    // appStatus == false ? appState = 0 : appState = 1
    const firebase = await AsyncStorage.getItem('firebase')
    if (firebase) {
        try {
            console.log('CONTEXT## gonna switch store')
            console.log('CONTEXT## appStatus : ' + appStatus)
            console.log('CONTEXT## firebase : ' + firebase)
            await marketApi.post('/marketswitchstore', { appStatus: !appStatus, firebase })
            dispatch({ type: 'switch_app', payload: !appStatus })
        } catch (e) {
            console.log(e)
            throw e
        }
    }

}
const switchProduct = dispatch => async (marketId, dep, image, productStatus, departmentss) => {
    // console.log('CONTEXT# : departmentss : ' + departmentss)
    console.log('CONTEXT# : product available we have received: ' + productStatus)
    // console.log("CONTEXT## prduct which has problem : "+departmentss[0].products[0].available)
    const response = await marketApi.post('/marketswitchproduct', { marketId, department: dep, image, available: !productStatus })
    console.log('response 3333333333333333333333333333333333333333333333')
    dispatch({ type: 'set_departments', payload: departmentss })
}

const getAppStatus = dispatch => async () => {
    console.log('CONTEXT##getAppStatus from context')
    const firebase = await AsyncStorage.getItem('firebase')
    if (firebase) {
        // try {
        //     console.log('gonna switch store')
        //     console.log('appStatus : ' + appStatus)
        //     console.log('firebase : ' + firebase)
        //     await marketApi.post('/marketswitchstore', { appStatus, firebase })
        //     dispatch({ type: 'switch_app', payload: appStatus })
        try {
            const appStatus = await marketApi.post('/marketgetappstatus', { firebase })
            console.log('CONTEXT## app status from context : ' + appStatus.data.status)
            let stus = appStatus == 0 ? false : true
            dispatch({ type: 'show_top_bar' })
            dispatch({ type: 'set_status', payload: stus })
        } catch (e) {
            // console.log(e)
            throw e
        }
    }

}

const sendFeedback = dispatch => async (email, subject, feedback) => {
    // console.log('CONTEXT# feedback : '+subject)
    // console.log('CONTEXT# feedback type  : '+feedback)
    const firebase = await AsyncStorage.getItem('firebase')
    if (firebase) {
        try {
            const response = await marketApi.post('/marketsendfeedback', { firebase, email, feedback: subject, feedbackType: feedback })
        }
        catch (e) {
            throw e
        }
    }

}
const getDepartments = dispatch => async (cb) => {
    console.log('CONTEXT# get departments 1###########################')
    const firebase = await AsyncStorage.getItem('firebase')
    if (firebase) {
        try {

            // const departments = await marketApi.post('/marketgetdepartments', { firebase })
            let market = await marketApi.post('/marketgetmarket', { firebase })
            if (market.data.market) {
                // console.log('CONTEXT#: status we got from mongo : '+market.data.market.status)
                let stus = market.data.market.status == 0 ? false : true
                // console.log('CONTEXT# status we have : '+stus)
                market.data.market.status = stus
                dispatch({ type: "set_market", payload: market.data.market })
                cb(true)
                // console.log('CONTEXT# market')
                // // }else if(market.data.loan !== null){
                // // console.log('CONTEXT# Loan')
                // console.log(market.data.market.loan)
                // RootNavigation.navigate('Department')
                // } else if (market.data.loan) {
            }
            else {
                cb(false)
                // console.log('CONTEXT# navigate to $$$$$$$$$$$$$$$$$$$$$')
                dispatch({ type: 'payment_required' })
                // RootNavigation.navigate('Nomoney')
                // const resetAction = NavigationActions.reset({
                //     index: 0,
                //     actions: [NavigationActions.navigate({ routeName: 'Nomoney' })],
                // });
                // this.props.navigation.dispatch(resetAction);
                // RootNavigation.dispatch(CommonActions.reset({
                //     index: 1,
                //     routes: [
                //         { name: 'Nomoney' },
                //     ],
                // }))

                // console.log('CONTEXT# elseeeeeeeeeee')
            }
            // let stus = market.data.market.appStatus == 0 ? false : true
            // market.data.market.status = stus

            // // const {loan} = 
            // console.log('CONTEXT#: '+ market.data.market.loan)
            // // dispatch({ type: "set_departments", payload: { departments: departments.data.departments, currency: departments.data.currency } })
            // // dispatch({ type: 'show_top_bar' })
            // dispatch({ type: "set_market", payload: market.data.market })
        } catch (e) {
            throw e
        }

    }
}
const addDepartment = dispatch => async (name) => {
    const firebase = await AsyncStorage.getItem('firebase')
    if (firebase) {
        let addDepartment
        try {
            addDepartment = await marketApi.post('/marketadddepartment', { firebase, name })
            // console.log('app status from context : ' + appStatus.data.status )
            dispatch({ type: 'add_department', payload: name })
        } catch (e) {
            // console.log('erorrrrrrrrrrrrrrrrrr')
            dispatch({ type: "add_department_error" })
            // console.log(e)
            throw e
            // console.log(e.status)
            // throw e
        }
    }
}
const deleteDepartment = dispatch => async (department) => {
    const firebase = await AsyncStorage.getItem('firebase')
    if (firebase) {
        try {
            const response = await marketApi.post('/marketdeletedepartment', { firebase, department })
            dispatch({ type: 'delete_department', payload: department })
        } catch (e) {
            throw e
        }
    }
}
const addProduct = dispatch => (department) => {
    dispatch({ type: 'set_departments', payload: department })
}
const deleteProduct = dispatch => async (image, departmentName, department) => {
    const firebase = await AsyncStorage.getItem('firebase')
    if (firebase) {
        try {
            const response = marketApi.post('/marketdeleteproduct', { firebase, image, department: departmentName })
            dispatch({ type: 'set_departments', payload: department })
        } catch (e) {
            console.log('CONTEXT# Delete error 77777777777777777777777777')
            console.log(e)
            throw e
        }
    }

}

const clearAddDep = dispatch => async () => {
    dispatch({ type: 'clear_add_dep_err' })
}
const signup = dispatch => async ({ userName, marketName, phoneNumber, Adress, photoName }) => {
    // const signup = dispatch => async ({ formData }) => {
    console.log('CONTEXT## signupppppppppppppppppppppppppppppppppppppppppppppppp')
};

const addToken = dispatch => {
    return async ({ token }) => {
        console.log('CONTEXT## add token')
        console.log('CONTEXT## token : ' + token)
        dispatch({ type: 'add_token', payload: token })
    }
}

const signout = dispatch => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'signout' })
        // RootNavigation.navigate('Signin', { userName: 'Lucy' });
        // RootNavigation.navigate('Signup');
        RootNavigation.navigate('sign');
    }
    // somehow sign out!!!
};

const autoLogin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            console.log('CONTEXT# there is a token')
            // console.log('token')
            // console.log(token)
            // RootNavigation.navigate('Signup', { userName: 'Lucy' });
            // navigate('Signup')
            // navigate('Signup');
            // dispatch({type:'auto_login',payload:{token}})
            dispatch({ type: 'auto_login', payload: token })
            // RootNavigation.navigate('Account', { userName: 'Lucy' });
            // RootNavigation.navigate('Signin', { userName: 'Lucy' });
        }
        else {
            console.log('CONTEXT## not token')
            // console.log(token)
            // navigate('Signup');
            // RootNavigation.navigate('Signup', { userName: 'Lucy' });
            // cb(false)
            RootNavigation.navigate('SigninHelper');
            // navigate('Signup')
        }
    }
}
const setFirebase = dispatch => () => {
    return (firebase) => {
        dispatch({ type: 'set_firebase', payload: firebase })
    }
}
const clearError = (dispatch) => () => {
    dispatch({ type: 'clear_error' })
}
export const { Provider, Context } = createDataContext(
    authReducer,
    {
        deleteProduct, clearAddDep, switchApp, addDepartment, getAppStatus, getDepartments, signout, signup,
        switchProduct, clearError, autoLogin, changeContext, addProduct, addToken,
        deleteDepartment, sendFeedback, setFirebase

    },
    //   { token: null, errorMessage: '', createNewMarketMessage: '', signinErrorMessaage: '', signinDisable: false }
    {
        showTopBar: false, appStatus: false, addDepErr: '', departments: [],
        departments2: [], currency: '', marketId: '', marketName: '', test: false,
        loan: false, timeNow: 0, token: null, firebase: ''
    }
);