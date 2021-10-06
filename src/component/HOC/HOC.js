import React, {  } from 'react'

const HOC = (Component, data) => {
    return class extends Component {
      constructor(props) {
        super(props);

        this.state = {
          count: data,
        };
      }

      handleClick = () => {
        this.setState({
          count: this.state.count + 1,
        })
      };

      render() {
        return (
          <Component
            CountNumber={this.state.count}
            handleCLick={this.handleClick}
          />
        )
      }
    }
}

export default HOC
