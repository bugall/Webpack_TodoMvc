// 导航栏
const navigation = (state = null, action) => {
    switch (action.event) {
        case 'index':
            return state;
        default:
            return state;
    }
}
const actionController = (state = null, action) => {
    switch (action.type) {
        case 'navigation':
            return navigation(...arguments);
        default:
            return state;
    }
}

exports = module.exports = actionController;