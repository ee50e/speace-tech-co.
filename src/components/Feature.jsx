import { useLang } from '../App'

export default function Feature() {
  const { t } = useLang()

  return (
    <section className="feature">
      <div className="glow" aria-hidden="true" />
      <div className="earth" aria-hidden="true">
        <svg viewBox="0 0 1500 520" preserveAspectRatio="xMidYMax meet">
          <defs>
            <radialGradient id="limb" cx="50%" cy="118%" r="70%">
              <stop offset="0%" stopColor="#B6AD90" />
              <stop offset="40%" stopColor="#A68A64" />
              <stop offset="74%" stopColor="#936439" />
              <stop offset="100%" stopColor="#582F0E" />
            </radialGradient>
            <clipPath id="earthclip">
              <circle cx="750" cy="1180" r="900" />
            </clipPath>
          </defs>
          <circle cx="750" cy="1180" r="900" fill="url(#limb)" />
          <g clipPath="url(#earthclip)">
            <ellipse cx="620" cy="360" rx="520" ry="60" fill="#582F0E" opacity=".22" />
            <ellipse cx="900" cy="430" rx="640" ry="70" fill="#582F0E" opacity=".18" />
            <ellipse cx="700" cy="300" rx="460" ry="46" fill="#D8D6C8" opacity=".1" />
          </g>
          <path
            d="M-40 320 Q 750 150 1540 320"
            fill="none"
            stroke="#A4AC86"
            strokeWidth="2"
            strokeOpacity=".5"
            strokeDasharray="3 10"
            strokeLinecap="round"
          />
          <circle cx="1180" cy="208" r="5" fill="#D8D6C8" />
        </svg>
      </div>
      <div className="wrap">
        <p className="f-label reveal">{t('feature_label')}</p>
        <h2 className="reveal d1">{t('feature_pull')}</h2>
        <p className="f-sub reveal d2">{t('feature_sub')}</p>
      </div>
    </section>
  )
}
