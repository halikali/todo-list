import { t } from 'i18next'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BrandLogo } from 'assets'
import Button from 'components/UI/atoms/Button/Button'
import Input from 'components/UI/atoms/Input/Input'

function Login() {
  const [dummyData, setDummyData] = useState({
    username: 'test',
    password: 'test123',
  })

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleLogin = () => {
    if (form.username !== dummyData.username || form.password !== dummyData.password) return false
    navigate('/')
  }

  const handleUserChange = (value: string) => {
    setForm({
      ...form,
      username: value,
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
        <Input size="full" type="text" placeholder={t('auth.username')} changeFunc={handleUserChange} />
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
