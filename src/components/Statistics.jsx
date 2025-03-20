import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Statistics.css';

const Statistics = ({ title, stats, colorFunc }) => {
  return (
    <section className={clsx('statistics')}>
      {title && <h2 className={clsx('title')}>Upload status</h2>}

      <ul className={clsx('stat-list')}>
        {stats.map(stat => (
          <li
            className={clsx('item-s')}
            key={stat.id}
            ref={element => {
              if (element) {
                colorFunc({ currentTarget: element });
              }
            }}
            onClick={colorFunc}
          >
            <span className={clsx('label')}>{stat.label}</span>
            <span className={clsx('percentage')}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  colorFunc: PropTypes.func.isRequired
};

export default Statistics;