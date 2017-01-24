// React components can be included inside of other components
class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // We can use curly braces to embed expressions into our JSX. The contents of the braces
    // are evaluated then added to the transpiled JSX.

    // You can use all of the methods you're familiar with to create JSX so here we can create
    // an array of list items based on the passed down list of messages with map.

    // To help with performance React wants lists of elements to have a unique identifier set
    // as the "key" property. Here we'll use the index.
    const messageListItems = this.props.messages.map((message, index) => {
      return <li key={index}>{message}</li>
    })

    // Props passed in are available to us here on this.props. A given value is on the props
    // object via a key name that corresponds to what is set as an element property in the
    // JSX of any other component that includes this component.

    // React will automatically expand an array of JSX elements.
    return (
      <ul>
        {messageListItems}
      </ul>
    )
  }
}

class MessageForm extends React.Component {
  constructor (props) {
    super(props)
  }
  // We can set other methods to our component to use inside the component itself
  // event handlers get passed the event object here like anywhere else so we can
  // interact with it in our handler.
  formHandleSubmit(e) {
    e.preventDefault()
    console.log(e.target.message.value)
    e.target.message.value = ''
  }

  // set the handler here on the property onSubmit.
  render() {
    return (
      <form onSubmit={this.formHandleSubmit}>
        <input type="text" placeholder="New Message" name="message"></input>
        <input type="submit"></input>
      </form>
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
    // Set the initial state of a component in the constructor. State is immutable which means
    // it cannot be directly changed from here on out. Only overwritten using setState.
    this.state = {
      messages: ['message-one', 'message-two', 'message-three']
    }
  }

  // Every component has to have a render method which returns only a single element.
  render() {
    // JSX is a syntax extenstion for JavaScript. It looks like HTML but it isn't exactly.
    // JSX gets transpiled by Babel to calls to React.CreateElement.

    // Only a single element can be returned. You can have multiple but you have to nest them
    // inside of something.

    // Data gets passed from component to component via props. You set them like you would any
    // HTML property. The data set here as a prop becomes available to that component. Here we
    // pass down the array of messages set to this.state.
    return (
      <div>
        <h1>HIIIII</h1>
        <MessageList messages={this.state.messages}/>
        <MessageForm />
      </div>)
  }
}

// ReactDOM takes our top level component and renders it to the DOM. It takes two arguments
// the component and the element to render it to.
ReactDOM.render(<TopComponent />, document.getElementById('fixture'))