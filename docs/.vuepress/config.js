const pluginsCont = require("./config/pluginsCont")
const navCont = require("./config/navCont")


module.exports = {
    base: "/docs/",
    title: "wwj218",
    plugins: pluginsCont,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/bc.jpg',
        nav: navCont,
    }
}