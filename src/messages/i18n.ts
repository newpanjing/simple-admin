import {createI18n} from 'vue-i18n'
import zh from './zh'

const messages = {
    en: {
        zh: "简体中文",
        en: "English",
    },
    zh
}
const lang = navigator.language.substring(0, 2)

export const i18n = createI18n({
    locale: lang, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    missingWarn: false,
    formatFallbackMessages: false,
    silentTranslationWarn: true,
    silentFallbackWarn: true,
})

export const t = i18n.global.t