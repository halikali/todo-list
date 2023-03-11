import { Link } from 'react-router-dom'
import { t } from 'i18next'

import { BrandLogo } from 'assets'
import Button from 'components/UI/atoms/Button/Button'
import Input from 'components/UI/atoms/Input/Input'

function Register() {
  return (
    <div className="login-page">
      <div className="container">
        <img src={BrandLogo} alt="brand logo" className="brand-logo" />
        <Input size="full" type="email" placeholder={t('auth.email')} />
        <Input size="full" type="text" placeholder={t('auth.username')} />
        <Input size="full" type="password" placeholder={t('auth.password')} />
        <div className="input-wrapper">
          <Button size="large" label={t('auth.register')} />
        </div>
        <Link to="/login">
          <p className="register-message">
            {t('auth.loginMessage')} <span className="register-message__marked">{t('auth.login')}</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Register
