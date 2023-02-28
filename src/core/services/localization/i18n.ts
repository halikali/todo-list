import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { localTR, localEN } from '.'

const resources = {
  tr: {
    translation: localTR,
  },
  en: {
    translation: localEN,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'tr',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
