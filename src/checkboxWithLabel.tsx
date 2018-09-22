import * as React from 'react'

type AppProps = {
  labelOn: string,
  labelOff: string 
}

type AppState = {
  isChecked: boolean
}
export class CheckboxWithLabel extends React.Component<AppProps, AppState> {
  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    }
  }

    onchange = () => {
      console.log({'check?': this.state.isChecked, 'checked': !this.state.isChecked})
      this.setState({ isChecked: !this.state.isChecked });
    }

    render() {
      return(
        <label>
          <input
            type="checkbox"
            checked={ this.state.isChecked }
            onChange= { this.onchange}
          />
          { this.state.isChecked ? this.props.labelOn : this.props.labelOff }
        </label>
      )
    }
  }
