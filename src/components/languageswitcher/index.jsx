import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import en from '../../assets/images/flags/en.png'
import es from '../../assets/images/flags/es.png'
import pt from '../../assets/images/flags/pt.png'

import './styles.css'

import { LanguageState } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'


const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: pt
  },
  {
    name: "English",
    value: "en",
    flag: en
  },
  {
    name: "Espanhol",
    value: "es",
    flag: es
  }
]

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  const { dispatch } = LanguageState()

  const navigate = useNavigate()

  const updatingLanguage = language => {
    dispatch({ type: 'UPDATE', payload: language})
  }



  return (
    <div className="languageSwitcher">
      {languageOptions.map(languageOptions => (
        <button 
          key={languageOptions.value}
          onClick={() => {
            updatingLanguage(languageOptions.value)
            navigate(`/${languageOptions.value}`) 
          }}
        >

          <img className="imgButton" src={languageOptions.flag} alt={languageOptions.name} />
        </button>
      ))}
    </div>
  )
}
