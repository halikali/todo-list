import { t } from 'i18next'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BrandLogo } from 'assets'
import Button from 'components/UI/atoms/Button/Button'
import Input from 'components/UI/atoms/Input/Input'
import UserService from 'core/services/User/UserService'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!form.email || !form.password) return false
    const loggedUser = await UserService.Login(form.email, form.password)

    if (loggedUser) navigate('/')
  }

  const handleUserChange = (value: string) => {
    setForm({
      ...form,
      email: value,
    })
  }

  const handlePasswordChange = (value: string) => {
    setForm({
      ...form,
      password: value,
    })
  }

  return (
    <div className="login-page">
      <div className="container">
        <img src={BrandLogo} alt="brand logo" className="brand-logo" />
        <Input size="full" type="text" placeholder={t('auth.email')} changeFunc={handleUserChange} />
        <Input size="full" type="password" placeholder={t('auth.password')} changeFunc={handlePasswordChange} />
        <div className="input-wrapper">
          <Button size="large" label={t('auth.login')} onClick={() => handleLogin()} />
        </div>
        <Link to="/register">
          <p className="register-message">
            {t('auth.registerMessage')} <span className="register-message__marked">{t('auth.register')}</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Login
