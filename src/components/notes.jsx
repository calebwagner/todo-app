import React, { Component } from 'react';
import Note from './note';

class Counters extends Component {

    render() {
        console.log("Notes rendered ...")
        const {onAdd, notes, onDelete} = this.props;

        console.log(notes)


        return (
        <div>
          {notes.map(note =>
          <Note
            key={note.id}
            onDelete={onDelete}
            onAdd={onAdd}
            note={note}
          />
                )}
        </div>);
    }
}

export default Counters;