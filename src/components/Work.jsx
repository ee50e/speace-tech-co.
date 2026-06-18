import { useLang } from '../App'

function ArcDecoration({ stroke }) {
  return (
    <div className="arc" aria-hidden="true">
      <svg viewBox="0 0 200 200" fill="none" stroke={stroke}>
        <circle cx="160" cy="160" r="150" strokeOpacity=".4" />
        <circle cx="160" cy="160" r="110" strokeOpacity=".25" strokeDasharray="2 7" />
      </svg>
    </div>
  )
}

export default function Work() {
  const { t } = useLang()

  return (
    <section className="work" id="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="sec-label">{t('work_label')}</span>
            <h2 className="sec-title">{t('work_title')}</h2>
          </div>
        </div>
        <div className="cards">
          <article className="card reveal d1">
            <div className="num">01</div>
            <h3>{t('card1_title')}</h3>
            <p>{t('card1_desc')}</p>
            <ArcDecoration stroke="#936439" />
          </article>
          <article className="card reveal d2">
            <div className="num">02</div>
            <h3>{t('card2_title')}</h3>
            <p>{t('card2_desc')}</p>
            <ArcDecoration stroke="#545D3F" />
          </article>
        </div>
      </div>
    </section>
  )
}
