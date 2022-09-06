import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'


function FriendListItem({avatar, name, isOnline=false}) {
    return (
<>
  <span className={isOnline ? s.statusOn : s.statusOff}></span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</>
    )
    
}

FriendListItem.protoTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}



export default FriendListItem;
