import React, { Component } from 'react';
import { notesConfig } from '../../config';
import './BoardComponent.scss';
import TableItemComponent from '../TableItemComponent';

// import TableItemComponent from '../TableItemComponent';

class BoardComponent extends Component {
  constructor(props) {
    super(props);
    this.setIsShow = this.setIsShow.bind(this);
    this.state = {
      isShow: true
    };

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes && fetchNotes();
  }


  setIsShow() {
    const { isShow } = this.state;
    this.setState({
      isShow: !isShow
    });
  }


  shouldComponentRender() {
    const { pending } = this.props;
    return pending;
  }


  renderNotesBlock = (notes) => notesConfig.map(({ heading }) => {
    const correspondingNotes = notes.filter((note) => note.status === heading);

    return (
      <li>
        <TableItemComponent heading={heading} correspondingNotes={correspondingNotes}/>
      </li>
    );
  });



  render() {
    const { allNotes } = this.props;

    return (
      <ul className="notes-block container">{this.renderNotesBlock(allNotes)}</ul>
    );
  }
}

export default BoardComponent;


// <div class="ui card">
//   <div class="content">
//     <div class="header">Project Timeline</div>
//   </div>
//   <div class="content">
//     <h4 class="ui sub header">Activity</h4>
//     <div class="ui small feed">
//       <div class="event">
//         <div class="content">
//           <div class="summary">
//              <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
//           </div>
//         </div>
//       </div>
//       <div class="event">
//         <div class="content">
//           <div class="summary">
//              <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
//           </div>
//         </div>
//       </div>
//       <div class="event">
//         <div class="content">
//           <div class="summary">
//              <a>Helen Troy</a> added two pictures
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="extra content">
//     <button class="ui button">Join Project</button>
