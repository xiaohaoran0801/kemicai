import React from 'react'
import {Route} from 'react-router-dom'
import loadable from '@loadable/component'
const Home = loadable(() => import('./components/Home'))
const Login = loadable(() => import('./components/Login'))
routes = [
    {
        path:'/home',
        name:'首页',
        component:Home,
    },
    {
        path:'/login',
        name:'登录',
        component:Login
    },
]