class TopComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Default',
      size: 20,
      className: 'classic'
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleSlider = this.handleSlider.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleTextInput(e) {
    let message = e.target.value
    this.setState({...this.state, message})
  }

  handleSlider(e) {
    let size = Number(e.target.value)
    this.setState({...this.state, size})
  }

  handleSelect(e) {
    let className = e.target.value
    this.setState({...this.state, className})
  }

  render() {
    const options = ['modern', 'classic']
    return (
      <div>
        <input type="text" name="message" onChange={this.handleTextInput} autoComplete="off"></input>
        <input type="range" max="40" min="15" onChange={this.handleSlider}></input>
        <select onChange={this.handleSelect}>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
        </select>
        <h1 className={this.state.className} style={{fontSize: this.state.size}}>{this.state.message}</h1>
      </div>
    )
  }
}

ReactDOM.render(<TopComponent />, document.getElementById('fixture'))