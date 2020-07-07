import * as Localization from 'expo-localization'
import data from './data'
import i18n from 'i18n-js'
import translations from './data'

i18n.translations = translations
i18n.defaultLocale = 'en-US'
i18n.fallbacks = true
i18n.locale = Localization.locale

export default i18n
