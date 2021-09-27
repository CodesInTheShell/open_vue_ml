// import store from '@/store'

export const sessionRouterValidator = (to, from, next) => {
    console.log('user:' , localStorage.getItem('user'))
    if (localStorage.getItem('user') === null && from.name == 'Home') {return false}
    else if (localStorage.getItem('user') === null && from.name != 'Home') next('/')
    else next()
}

