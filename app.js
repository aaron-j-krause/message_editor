// React components can be included inside of other components
class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const str = 'This is just a variable'
    // We can use curly braces to embed expressions into our JSX. The contents of the braces
    // are evaluated then added to the transpiled JSX.
    return (
      <ul>
        <li>LISTTT</li>
        <li>{str}</li>
      </ul>
    )
  }
}

// React has a property Component which is a class. We make our components by extending this
// class. The name has to be capitalized it's how React knows the difference between an HTML
// element and one you created.
class TopComponent extends React.Component {
  // This is how React passes down props.
  constructor(props) {
    super(props)
  }

  // Every component has to have a render method which returns only a single element. In this
  // case we're returning an H1 made with JSX.
  render() {
    // JSX is a syntax extenstion for JavaScript. It looks like HTML but it isn't exactly.
    // JSX gets transpiled by Babel to calls to React.CreateElement.

    // Only a single element can be returned. You can have multiple but you have to nest them
    // inside of something.
    return (
      <div>
        <h1>HIIIII</h1>
        <MessageList />
      </div>)
  }
}

// ReactDOM takes our top level component and renders it to the DOM. It takes two arguments
// the component and the element to render it to.
ReactDOM.render(<TopComponent />, document.getElementById('fixture'))