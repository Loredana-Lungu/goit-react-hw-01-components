import PropTypes from 'prop-types';
import clsx from 'clsx';
import './FriendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
      <li className={clsx("item-f")}>
        <span className={clsx('status-f', {online: isOnline, offline: !isOnline})}></span>
        <img
            className={clsx('avatar')}
            src={avatar}
            alt="User avatar"
            width="48"
        />
        <p className={clsx('name')}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;