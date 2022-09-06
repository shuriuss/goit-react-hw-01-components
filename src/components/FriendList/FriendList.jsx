import PropTypes from 'prop-types';
// import friends from '../../data/friends.json';
import FriendListItem from '../FriendListItem';
import s from './FriendList.module.css'

function FriendList({friends}) {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <li key={item.id} className={s.item}>
          <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}/>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  }


export default FriendList