import React, { Component } from 'react'
import { fetchUsersSuccess } from "./action";
import { connect } from 'react-redux'
import axios from 'axios'

export class ReduxCompClass extends Component {

    componentDidMount() {
        console.log('componennt did mount')
        this.props.fetchUsersSuccess();
    }

    render() {
        return (
             <div>
        <h2>Redux Class Component</h2>
        {/* <button onClick={this.props.fetchUsersSuccess}>Fetch data</button> */}
        <ul>
                { this.props.users.map(item => (
                    <li key={item.id}>{item.name}</li>
                ) ) }
        </ul>
      </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        users:state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersSuccess: () => {
             axios
               .get("https://jsonplaceholder.typicode.com/users/")
                 .then((res) => {
                     const data = res.data;
                   dispatch(fetchUsersSuccess(data));
               })
               .catch((err) => {
                   console.log('something went wrong');
               });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxCompClass)