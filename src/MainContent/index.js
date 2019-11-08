import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = props =>
  <div className="main">
    <ConfirmedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />
    <Counter
      totalInvited={props.totalInvited}
      numberAttending={props.numberAttending}
      numberUnConfirmed={props.numberUnConfirmed}
    />

    <GuestList
      guests={props.guests}
      isFiltered={props.isFiltered}
      toggleConfirmationID={props.toggleConfirmationID}
      toggleEditingID={props.toggleEditingID}
      setNameID={props.setNameID}
      removeGuestID={props.removeGuestID}
      pendingGuest={props.pendingGuest}
    />

  </div>;

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  numberAttending: PropTypes.number,
  numberUnConfirmed: PropTypes.number,
  totalInvited: PropTypes.number,
  guests: PropTypes.array.isRequired,
  toggleConfirmationID: PropTypes.func.isRequired,
  toggleEditingID: PropTypes.func.isRequired,
  setNameID: PropTypes.func.isRequired,
  removeGuestID: PropTypes.func.isRequired,
  PendingGuest: PropTypes.string.isRequired
}

export default MainContent;
