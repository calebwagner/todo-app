import './App.css';
import { Component } from 'react';
import Notes from './components/notes'
import NavBar from './components/navbar';

class App extends Component{
  state = {
    notes:[
    {
      id: 1,
      title: "Learning Javascript",
      note: "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites."
    },
    {
      id: 2,
      title: "Learning Javascript",
      note: "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites."
    },
    {
      id: 3,
      title: "Learning Javascript",
      note: "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites."
    },
    {
      id: 4,
      title: "Learning Javascript",
      note: "Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites."
    },
    ]
 };

 constructor(props) {
  super(props);
  console.log("App constructor ... ", this.props);
 }

 componentDidMount() {
  console.log("App mounted ...")
 }

 handleAdd = (noteObj) => {
  const notes = [...this.state.notes];
  notes.push(noteObj);
  this.setState({notes})
 }

//  handleDelete = (noteId) => {
//   const notes = this.state.notes;
//   console.log("notes ... ", notes)
//   const noteObj = notes.find(note => note.id === noteId);
//   console.log("noteObj ... ", noteObj)
//   const id = noteObj.id;
//   console.log("id ... ", id)

//   this.state.notes.splice(id, 1);
//   this.setState({notes})
//  }

handleDelete = (noteId) => {
  const notes = this.state.notes.filter(note => note.id !== noteId);
  this.setState({notes});
}

  render() {
    return (
      <div>
        <NavBar
        totalNotes={this.state.notes.filter}
        />
        <main className='container'>
        <Notes
        notes={this.state.notes}
        onAdd={this.handleAdd}
        onDelete={this.handleDelete}
        />
        </main>
      </div>
    );
  }
}

export default App;
