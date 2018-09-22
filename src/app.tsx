import * as React from 'react';
import * as ReactDom from 'react-dom';
import { CheckboxWithLabel } from './checkboxWithLabel';

type AppProps = { name:string}
const App: React.SFC<AppProps> = ({name}) => <div>{name}</div>

type AppProp = {
  message: string
}

type AppState = {
  content: number
}
class NewApp extends React.Component<
 AppProp, AppState> {
    constructor(props){
      super(props);
      this.state = {
        content: 0
      }
    }

  increment = () => {
    this.setState({
      content: this.state.content + 1
    })
  }
  render () {
    return (
      <div onClick={ this.increment}> { this.props.message } { this.state.content }</div>
    )
    
  }
}

ReactDom.render(
  <CheckboxWithLabel labelOff="Off" labelOn="On" />,
  document.getElementById('root')
);