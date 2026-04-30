import React from 'react'
import { Link } from 'react-router-dom'
import AuthLeftPanel from '../components/Auth/AuthLeftPanel'
import AuthFooter from '../components/Auth/AuthFooter'
import LoginForm from '../components/Auth/LoginForm'

const Login = () => {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col md:flex-row">
        {/* LEFT PANEL */}
        <AuthLeftPanel />

        {/* RIGHT PANEL */}
        <section className="flex-1 flex items-center justify-center p-6 bg-background relative">
          <div className="absolute top-8 left-8 md:hidden">
            <Link to="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>shield</span>
              <h1 className="text-md font-bold tracking-tighter text-primary uppercase font-headline-lg">PropSight 360</h1>
            </Link>
          </div>
          <LoginForm />
        </section>
      </main>

      <AuthFooter />
    </div>
  )
}

export default Login
