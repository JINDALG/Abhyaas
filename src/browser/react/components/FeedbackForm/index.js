import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { VRButton, SelectField } from '../uiElements';
import styles from './styles';
import { Link } from 'react-router';
import { teal300 } from 'material-ui/styles/colors';

export default class FeedbackForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      device: '',
      rating: '',
      realistic: '',
      volumehelpful: '',
      overall: '',
      addtl: '',
      usability: '',
      design: '',
      wouldusefuture: '',
      wouldusepresent: '',
      mostwanted: '',
      performance: '',
    };
  }

  handleChange = field => event => {
    const value = event.target.value;

    this.setState({
      [`${field}`]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitFeedback({
      device: this.state.device,
      rating: this.state.rating,
      performance: this.state.performance,
      realistic: this.state.realistic,
      volumehelpful: this.state.volumehelpful,
      overall: this.state.overall,
      addtl: this.state.addtl,
      usability: this.state.usability,
      design: this.state.design,
      wouldusefuture: this.state.wouldusefuture,
      wouldusepresent: this.state.wouldusepresent,
      mostwanted: this.state.mostwanted
    });
    window.location = window.location.origin;
  }

  handleSelectChange = field => (event, index, value) => this.setState({
    [`${field}`]: value
  });

  render() {
    return (
      <div className= "container" style={styles.container}>
          <div className="row">
            <div className="col" style={styles.flowCol} >
            <h4>
              <span className='flow-text' style={{color: '#FFFFFF'}}>
                  Thanks for trying out StagedFright! We would love your feedback at:
                  <br/>
                  Shivam Jindal:  <b>jindalshivam65@gmail.com</b>
                  <br/>
              </span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
