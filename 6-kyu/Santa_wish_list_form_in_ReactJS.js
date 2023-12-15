/**
 * Santa wish list form in ReactJS
 * https://www.codewars.com/kata/5a9ecd89fd5777e0790001ea/train/javascript
 *
 */

const React = require('react')

class WishlistForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      wish: '',
      priority: 1,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.send(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name" onChange={this.handleChange} />
        <textarea id="wish" onChange={this.handleChange} />
        <select
          id="priority"
          value={this.state.priority}
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
