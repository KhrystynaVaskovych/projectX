import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CRUDService from '../../service/CRUDService'

const service = new CRUDService();
const API = 'http://localhost:4000';

class TableItemComponent extends Component {
  constructor(props) {
    super(props);
    this.setIsShow = this.setIsShow.bind(this);
    this.state = {
      isShow: true,
      newNote: '',
      notes: []
    };

    this.handleNewNote = this.handleNewNote.bind(this);
    this.renderInputField = this.renderInputField.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getAllNotes = this.getAllNotes.bind(this);
    
  } 

  getAllNotes() {
    const service = new CRUDService();
    const API = 'http://localhost:4000';
    
    try {
      service.getNotes(`${API}/notes`)
         .then((res) => {
           console.log(res.data);
           this.setState({
             notes: res.data
           })
         })
   
        } catch (error) {
         console.error(error)
     }
  }

  componentDidMount() {
    this.getAllNotes()
  }

  async handleNewNote() {

   
    const myNewNote = () => {
      const _id = ((Math.random() +10) + 1);
      const _title = this.state.newNote;
      const _status = this.props.heading;
      return {id: _id, title: _title, status: _status, description: ""}
    }

    try {
     await service.postNote(`${API}/notes`, myNewNote())
      .then((res) => {
        console.log(res.data);
       const newState = [...this.state.notes, res.data];
        this.setState({
          notes: newState,
          newNote: ''
        })
        console.log(this.state.notes);
      })

     } catch (error) {
      console.error(error)
  }
}

  handleInputChange(e) {
    const target = e.target;
    
    this.setState({
      newNote: target.value})
    console.log(this.state.newNote);
  }

  setIsShow() {
    const { isShow } = this.state;
    this.setState({
      isShow: !isShow
    });
  }

  renderInputField() {
    return (
      <div className="ui form">
        <div className="field">
          <textarea rows="2" placeholder="enter a title for this card"
          value={this.state.newNote} onChange={this.handleInputChange}
          />
        </div>
        <button
          type="button"
          className="ui green button fluid"
          onClick={this.handleNewNote}
        >
          Add your new note
         </button>
      </div>
    );
  }

  renderButton() {
    return (
      <button
      type="button"
      className="ui button fluid"
      onClick={this.setIsShow}
    >
        Add another note
    </button>
    )
  }

  renderNotes = (notes) => {
    const correspondingNotes = notes.filter((note) => note.status === this.props.heading);
    
    return correspondingNotes.map(({ id, title }) => {
          return (
          <li key={id} className="ui card notes-block__note">
            <div className="content">
            <button type="button" className="ui icon button basic right floated" onClick={() =>this.deleteMyNote(id)}>
            <i class="close icon"></i>
            </button>
              <div className="header">{title}</div>
            </div>
          </li>
    )})
  }

  render() {
    const { heading } = this.props;
    const { isShow, notes } = this.state;    

    return (
      <div className="ui card">
        <ul className="content">
          <div className="header">{heading}</div>
           {this.renderNotes(notes)}
        </ul>
        <div className="extra content">{isShow ? this.renderButton() : this.renderInputField()}
        </div>
      </div>
   
    )
  }
};
  
export default TableItemComponent;
