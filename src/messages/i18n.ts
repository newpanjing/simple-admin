import {createI18n} from 'vue-i18n'
import {useStorage} from "@vueuse/core";

const messages = {
    en: {
        zh: "简体中文",
        en: "English",
        message: {
            hello: 'Hello World!'
        }
    },
    zh: {
        "Back home": "返回首页",
        Home: "首页",
        Profile: "个人中心",
        Logout: "退出登录",
        "Layout Config": "布局配置",
        Theme: "主题",
    },
}
const lang = navigator.language.substring(0, 2)
const language = useStorage("language", lang)
export const i18n = createI18n({
    locale: language.value, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    missingWarn: false,
    formatFallbackMessages: false,
    silentTranslationWarn: true,
    silentFallbackWarn: true,
})

export const t = i18n.global.t