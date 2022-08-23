import React, { Component } from 'react';

class Note extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
      //   if(prevProps.counter.value !== this.props.counter.value) {
          // Ajax call and get new data from the server
      //   }
      }

      componentWillUnmount() {
          console.log("Counter unmount ...")
      }

    render() { 
        console.log("Counter rendered ...")

        return (
        <div className='row'>
            {/* <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div> */}

            <div>
                <h2>
                    {`Title: ${this.props.note.title} with id: ${this.props.note.id}`}
                </h2>
            </div>

            <div>
              {this.props.note.note}
            </div>

                <button
                    onClick={() => this.props.onDelete(this.props.note.id)}
                    className="btn btn-danger btn-sm">
                        Delete
                </button>
        </div>
        );
    }
    // getBadgeClasses() {
    //     let classes = 'badge m-2 badge-';
    //     classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    //     return classes;
    // }

    // formatCount() {
    //     const {value} = this.props.counter;
    //     return value === 0 ? "Zero" : value;
    // }
}
 
export default Note;