import { useLang } from '../App'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <span className="eyebrow reveal">{t('eyebrow')}</span>
          {/* eslint-disable-next-line react/no-danger */}
          <h1 className="reveal d1" dangerouslySetInnerHTML={{ __html: t('hero') }} />
          <p className="lead reveal d2">{t('about')}</p>
          <div className="hero-actions reveal d3">
            <a className="btn-ghost" href="#work">
              <span>{t('hero_cta')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-art reveal d2" aria-hidden="true">
          <svg viewBox="0 0 540 540">
            <defs>
              <radialGradient id="planet" cx="38%" cy="34%" r="75%">
                <stop offset="0%" stopColor="#B6AD90" />
                <stop offset="42%" stopColor="#A68A64" />
                <stop offset="78%" stopColor="#936439" />
                <stop offset="100%" stopColor="#582F0E" />
              </radialGradient>
              <linearGradient id="atm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A4AC86" stopOpacity="0" />
                <stop offset="100%" stopColor="#A4AC86" stopOpacity=".55" />
              </linearGradient>
              <clipPath id="c">
                <circle cx="270" cy="270" r="128" />
              </clipPath>
            </defs>

            {/* orbit rings */}
            <g className="spin" stroke="#936439" fill="none">
              <ellipse cx="270" cy="270" rx="250" ry="250" strokeOpacity=".28" />
              <ellipse cx="270" cy="270" rx="250" ry="118" strokeOpacity=".5" strokeDasharray="2 8" strokeLinecap="round" />
            </g>
            <g className="spin-rev" stroke="#545D3F" fill="none">
              <ellipse cx="270" cy="270" rx="196" ry="196" strokeOpacity=".22" />
            </g>

            {/* atmosphere halo */}
            <circle cx="270" cy="270" r="138" fill="url(#atm)" opacity=".5" />

            {/* planet */}
            <circle cx="270" cy="270" r="128" fill="url(#planet)" />

            {/* surface bands */}
            <g clipPath="url(#c)">
              <ellipse cx="240" cy="210" rx="120" ry="26" fill="#D8D6C8" opacity=".14" />
              <ellipse cx="300" cy="320" rx="130" ry="30" fill="#582F0E" opacity=".18" />
              <ellipse cx="300" cy="360" rx="120" ry="24" fill="#582F0E" opacity=".12" />
            </g>

            {/* terminator shade */}
            <circle cx="270" cy="270" r="128" fill="#070707" opacity=".12" transform="translate(30 26)" clipPath="url(#c)" />

            {/* satellite */}
            <g className="sat">
              <circle cx="270" cy="20" r="7" fill="#582F0E" />
              <circle cx="270" cy="20" r="13" fill="none" stroke="#582F0E" strokeOpacity=".4" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
