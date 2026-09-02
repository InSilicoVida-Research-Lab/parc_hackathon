import { useState, useMemo, Fragment } from 'react';
import {
  AGENDA_DAYS,
  HACKATHON_MILESTONES,
  formatDuration,
  toDateTime,
  getGlanceItems,
  getExpandableIds,
} from '../data/agenda';

function isSlimRow(kind) {
  return kind === 'break' || kind === 'logistics' || kind === 'social';
}

function isExpandable(item) {
  return Boolean(item.presentations?.length);
}

function RailRow({ item, isoDate, isOpen, onToggle }) {
  const duration = formatDuration(item.start, item.end);
  const slim = isSlimRow(item.kind);
  const expandable = isExpandable(item);
  const panelId = `${item.id}-panel`;

  return (
    <li
      id={item.id}
      className={`rail__row rail__row--${item.kind}${slim ? ' rail__row--slim' : ''}`}
    >
      <div className="rail__gutter">
        <time className="rail__time" dateTime={toDateTime(isoDate, item.start)}>
          {item.start}
        </time>
        {duration && <span className="rail__duration">{duration}</span>}
        {item.number && <span className="rail__figure">{item.number}</span>}
      </div>

      <div className="rail__body">
        <span className="rail__mobile-meta">
          {item.start}
          {duration ? ` · ${duration}` : ''}
        </span>

        {item.dateLabel && (
          <span className="rail__date-label">{item.dateLabel}</span>
        )}

        {expandable ? (
          <button
            type="button"
            className="rail__toggle"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => onToggle(item.id)}
          >
            <h3 className="rail__title">{item.title}</h3>
            <i className="bi bi-chevron-down" aria-hidden="true" />
          </button>
        ) : (
          <h3 className={`rail__title rail__static-title${slim ? '' : ''}`}>{item.title}</h3>
        )}

        {item.details && (
          <p className="rail__abstract">{item.details}</p>
        )}

        {item.chairs && (
          <p className="rail__chairs">
            <span className="rail__meta-label">Chairs</span>
            {item.chairs}
          </p>
        )}

        {expandable && (
          <div
            id={panelId}
            className={`rail__panel${isOpen ? '' : ' rail__panel--closed'}`}
          >
            <span className="rail__papers-label">Presentations</span>
            <ol className="rail__papers">
              {item.presentations.map((p, idx) => (
                <li key={idx}>
                  <strong>{p.speaker}</strong>
                  {p.title && (
                    <>
                      {' '}
                      — <em>{p.title}</em>
                    </>
                  )}
                </li>
              ))}
            </ol>
            {item.discussion && (
              <p className="rail__discussion">{item.discussion}</p>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function Agenda({ heroRef }) {
  const expandableIds = useMemo(() => getExpandableIds(AGENDA_DAYS), []);
  const glanceItems = useMemo(() => getGlanceItems(AGENDA_DAYS), []);
  const [openIds, setOpenIds] = useState(() => new Set());
  const allExpanded = expandableIds.length > 0 && expandableIds.every((id) => openIds.has(id));

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setOpenIds(new Set(expandableIds));
  const collapseAll = () => setOpenIds(new Set());

  return (
    <div>
      <section className="hero" ref={heroRef}>
        <div className="hero__inner">
          <h1 className="hero-heading">Programme Agenda</h1>
          <p className="editorial-sub hero-sub">
            Detailed schedule for the 2nd PARC Modellers Meeting and parallel Hackathon sessions in Tarragona, Spain.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <nav className="glance" aria-label="Programme at a glance">
            <h2 className="glance__title">Programme at a Glance</h2>
            <div className="glance__grid">
              {glanceItems.map((day) => (
                <div key={day.id}>
                  <p className="glance__day-label">{day.label}</p>
                  <ul className="glance__list">
                    {day.items.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="glance__link">
                          {item.number && `${item.number}. `}
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <div className="agenda-controls">
            <button
              type="button"
              className="agenda-controls__btn"
              onClick={allExpanded ? collapseAll : expandAll}
            >
              {allExpanded ? 'Collapse all' : 'Expand all'}
            </button>
          </div>

          <ol className="rail">
            {AGENDA_DAYS.map((day) => (
              <Fragment key={day.id}>
                <li className="rail__day" id={day.id}>
                  <h2 className="day-header">
                    <span className="day-header__label">{day.label}</span>
                    <span className="day-header__date">
                      {day.weekday}, {day.date}
                    </span>
                    {day.subtitle && (
                      <span className="day-header__subtitle">{day.subtitle}</span>
                    )}
                  </h2>
                </li>
                {day.items.map((item) => (
                  <RailRow
                    key={item.id}
                    item={item}
                    isoDate={day.isoDate}
                    isOpen={openIds.has(item.id)}
                    onToggle={toggleItem}
                  />
                ))}
              </Fragment>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--raised">
        <div className="section__inner">
          <ol className="rail">
            <li className="rail__day" id={HACKATHON_MILESTONES.id}>
              <h2 className="day-header">
                <span className="day-header__label">{HACKATHON_MILESTONES.label}</span>
                <span className="day-header__date">{HACKATHON_MILESTONES.dateRange}</span>
              </h2>
            </li>
          </ol>
          <p className="rail__hackathon-intro">{HACKATHON_MILESTONES.intro}</p>
          <ol className="rail">
            {HACKATHON_MILESTONES.items.map((item) => (
              <RailRow
                key={item.id}
                item={item}
                isoDate={HACKATHON_MILESTONES.isoDate}
                isOpen={false}
                onToggle={() => {}}
              />
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
