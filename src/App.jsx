import { useState, useEffect, createContext, useContext } from 'react'
import { I18N } from './i18n'
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Feature from './components/Feature'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const LangContext = createContext()

export function useLang() {
  return useContext(LangContext)
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try { return sessionStorage.getItem('speace-lang') || 'en' } catch { return 'en' }
  })

  const t = (key) => I18N[lang][key] ?? key

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try { sessionStorage.setItem('speace-lang', lang) } catch {}
  }, [lang])

  useEffect(() => {
    // Hero reveals on mount
    document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('in'))

    // Other sections reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })

    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const header = document.getElementById('site-header')
    if (!header) return
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <Feature />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  )
}
