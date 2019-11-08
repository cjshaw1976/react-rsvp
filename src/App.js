import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  toggleGuestPropertyID = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  removeGuestID = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    })

  toggleEditingID = id =>
    this.toggleGuestPropertyID("isEditing", id);

  toggleConfirmationID = id =>
    this.toggleGuestPropertyID("isConfirmed", id);

  setNameID = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnConfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest} />
        <MainContent
          toggleFilter={this.toggleFilter}
          guests={this.state.guests}
          isFiltered={this.state.isFiltered}
          toggleConfirmationID={this.toggleConfirmationID}
          toggleEditingID={this.toggleEditingID}
          setNameID={this.setNameID}
          removeGuestID={this.removeGuestID}
          pendingGuest={this.state.pendingGuest}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnConfirmed={numberUnConfirmed} />
      </div>
    );
  }
}

export default App;
