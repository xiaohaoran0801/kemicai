import React from 'react'
import {Route} from 'react-router-dom'
import loadable from '@loadable/component'
const Home = loadable(() => import('./components/Home'))
const Login = loadable(() => import('./components/Login'))
const Ssq = loadable(() => import('./components/Home/SSQ'))
const Trend = loadable(() => import('./components/Home/Trend'))
const Register = loadable(() => import('./components/Login/Register'))
export const routes = [
    {
        path:'/home',
        name:'首页',
        component:Home,
        children:[
            {
                path:'/home/ssq',
                name:'双色球',
                component:Ssq,
            },
            {
                path:'/home/trend',
                name:'走势图',
                component:Trend,
            },
        ]
    },
    {
        path:'/login',
        name:'登录',
        component:Login,
        children:[
            {
                path:'/login/register',
                name:'注册',
                component:Register,
            }
        ]
    },
]
export const RouteWithSubRoute = (route)=>{
    return (
        <Route
        path={route.path}
        render={(props)=>{
            return <route.component {...props} children={route.children} changeNav={route.changeNav}/>   
        }}
        >

        </Route>
    )
}