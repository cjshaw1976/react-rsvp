import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';


const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) =>
      <Guest
        key={index}
        name={guest.name}
        isConfirmed={guest.isConfirmed}
        isEditing={guest.isEditing}
        handleConfirmation={() => props.toggleConfirmationID(guest.id)}
        handleToggleEditing={() => props.toggleEditingID(guest.id)}
        setName={text => props.setNameID(text, guest.id)}
        handelRemove={() => props.removeGuestID(guest.id)} />
    )}
  </ul>;

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationID: PropTypes.func.isRequired,
  toggleEditingID: PropTypes.func.isRequired,
  setNameID: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestID: PropTypes.func.isRequired,
  PendingGuest: PropTypes.string.isRequired
}
export default GuestList;
