import PropTypes from 'prop-types';
import clsx from 'clsx';
import FriendListItem from './FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
        <ul className={clsx("friend-list")}>
          {friends.map(friend => (
              <FriendListItem key={friend.id} avatar={friend.avatar}
                  name={friend.name} isOnline={friend.isOnline} />))}
        </ul >
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        })
      ).isRequired,
}

export default FriendList;