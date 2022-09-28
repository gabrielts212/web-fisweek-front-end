import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptBRJson from './translations/ptBR.json'
import enJson from './translations/en.json'
import esJson from './translations/es.json'

i18n.use(initReactI18next).init({
  fallbackLng: "ptBR",
  interpolation: {
    escapeValues: false
  },
  resources: {
    ptBR: ptBRJson,
    en: enJson,
    es: esJson
  },
})

export default i18n
