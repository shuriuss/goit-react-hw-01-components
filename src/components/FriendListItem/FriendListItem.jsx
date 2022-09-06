import PropTypes from 'prop-types';
import friends from '../../data/friends.json'


function FriendListItem({avatar, name, isOnline=false}) {
    return (
<>
  <span class="status"></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</>
    )
    
}

FriendListItem.protoTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}



export default FriendListItem;
