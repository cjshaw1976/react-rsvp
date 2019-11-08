import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName';

const Guest = props =>
  <li>
    <GuestName
      isEditing={props.isEditing}
      handleEditName={e => props.setName(e.target.value)}>
      {props.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.isConfirmed}
        onChange={props.handleConfirmation} /> Confirmed
    </label>
    <button onClick={props.handleToggleEditing}>
      {props.isEditing ? "save" : "edit"}
    </button>
    <button onClick={props.handelRemove}>remove</button>
  </li>;


Guest.propTypes = {
  name: PropTypes.string.isRequired,
  setName:PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  handelRemove: PropTypes.func.isRequired
}
export default Guest;
