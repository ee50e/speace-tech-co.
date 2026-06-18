import { useLang } from '../App'

export default function Header() {
  const { lang, setLang, t } = useLang()

  return (
    <header id="site-header">
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="SPEACE TECH home">
          <span className="mark" aria-hidden="true" />
          <span className="logo">SPEACE TECH</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="navlink" href="#work">{t('nav_what')}</a>
          <a className="navlink" href="#contact">{t('nav_contact')}</a>
        </nav>
        <div className="right">
          <a className="cta" href="#contact">
            <span>{t('nav_cta')}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <div className="langtoggle" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
              lang="ar"
            >
              ع
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
