import { useLang } from '../App'

export default function Contact() {
  const { t } = useLang()

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <span className="sec-label">{t('contact_label')}</span>
          <h2>{t('contact_title')}</h2>
        </div>
        <div className="info reveal d1">
          <div className="row">
            <div className="k">{t('email_label')}</div>
            <a className="v" href="mailto:founder@speacetech.com">
              founder@speacetech.com
            </a>
          </div>
          <div className="row">
            <div className="k">{t('loc_label')}</div>
            <div className="v">{t('loc_value')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
