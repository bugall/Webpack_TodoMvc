import store from './store'

const dispatch = (type) => {
    store.dispatch({ type })
}

exports = module.exports = dispatch;