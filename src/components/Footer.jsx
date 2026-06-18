import { useLang } from '../App'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <span className="logo">SPEACE TECH</span>
          <a className="ec" href="mailto:founder@speacetech.com">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
            founder@speacetech.com
          </a>
        </div>
        <p className="legal">{t('footer')}</p>
      </div>
    </footer>
  )
}
