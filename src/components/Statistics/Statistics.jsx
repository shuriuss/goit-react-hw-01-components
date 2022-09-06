import PropTypes from 'prop-types';
// import data from '../../data/data.json';
import s from './Statistics.module.css'

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item => (
          <li key={item.id} className={s.item}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}</span>
          </li>
        ))}
        </ul>
    </section>
  );
}

Statistics.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    stats: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}

export default Statistics;