import { Link, useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import { useState } from 'react'

import { BrandLogo } from 'assets'
import Button from 'components/UI/atoms/Button/Button'
import Input from 'components/UI/atoms/Input/Input'
import UserService from 'core/services/User/UserService'

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleNameChange = (value: string) => {
    setForm({
      ...form,
      name: value,
    })
  }

  const handlePasswordChange = (value: string) => {
    setForm({
      ...form,
      password: value,
    })
  }

  const handleEmailChange = (value: string) => {
    setForm({
      ...form,
      email: value,
    })
  }

  const handleRegister = async () => {
    if (!form.email || !form.password || !form.name) return false
    const registeredUser = await UserService.Register(form.email, form.password, form.name)

    if (registeredUser) navigate('/')
  }

  return (
    <div className="login-page">
      <div className="container">
        <img src={BrandLogo} alt="brand logo" className="brand-logo" />
        <Input size="full" type="email" placeholder={t('auth.email')} changeFunc={handleEmailChange} />
        <Input size="full" type="text" placeholder={t('auth.username')} changeFunc={handleNameChange} />
        <Input size="full" type="password" placeholder={t('auth.password')} changeFunc={handlePasswordChange} />
        <div className="input-wrapper">
          <Button size="large" label={t('auth.register')} onClick={() => handleRegister()} />
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
