class TopComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Default',
      size: 20,
      className: 'classic'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let {name, value} = e.target
    value = name === 'size' ? Number(value) : value
    this.setState({[name]: value})
  }

  render() {
    const options = ['classic', 'modern']
    return (
      <div>
        <form onChange={this.handleChange}>
          <input type="text" name="message" onChange={this.handleTextInput} autoComplete="off"></input>
          <input type="range" name="size" max="40" min="15" onChange={this.handleSlider}></input>
          <select name="className" onChange={this.handleSelect}>
            {options.map((c, i) => (<option key={i} value={c}>{c}</option>))}
          </select>
        </form>
        <h1 className={this.state.className} style={{fontSize: this.state.size}}>{this.state.message}</h1>
      </div>
    )
  }
}

ReactDOM.render(<TopComponent />, document.getElementById('fixture'))