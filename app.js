// React has a property Component which is a class. We make our components by extending this
// class. The name has to be capitalized.
class Thing extends React.Component {
  // This is how React passes down props.
  constructor(props) {
    super(props)
  }

  // Every component has to have a render method which returns only a single argument. In this
  // case we're returning an H1 made with JSX.
  render() {
    // JSX is a syntax extenstion for JavaScript. It looks like HTML but it isn't exactly.
    // JSX gets transpiled by Babel to calls to React.CreateElement.
    return <h1>HIIIII</h1>
  }
}

// ReactDOM takes our top level component and renders it to the DOM. It takes two arguments
// the component and the element to render it to.
ReactDOM.render(<Thing />, document.getElementById('fixture'))