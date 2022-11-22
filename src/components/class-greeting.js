import React from 'react';
import Row from 'react-bootstrap/Row'

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mary',
      surname:'Poppins',
      width: window.innerWidth
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this)

  }

  componentDidMount() {
    document.title = `${this.state.name} ${this.state.surname}`;
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.setState({
      width: window.innerWidth
    })
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value
    });
  }

  render() {
    return (
      <section>
        <Row label="Name">
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Row>
        <Row label='Name'>
          <input value={this.state.surname} onChange={this.handleSurnameChange}></input>
        </Row>
        <Row label="width">
          {this.state.width}
        </Row>
      </section>
    )
  }
}