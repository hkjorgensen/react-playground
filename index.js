class HelloWorld extends React.Component {
  render() {
    return <h1>hello!</h1>
  }
}

// Start it
ReactDOM.render(<HelloWorld />, document.querySelector('#app'))
