import PropTypes from 'prop-types';
import data from '../../data/data.json';

function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(item => (
          <li key={item.id} class="item">
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}</span>
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