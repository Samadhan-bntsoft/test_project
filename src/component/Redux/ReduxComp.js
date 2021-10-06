import React from 'react'
import { fetchUsersSuccess } from "./action";
import { connect } from 'react-redux'
import axios from 'axios'

function ReduxComp({users , fetchUsersSuccess}) {
    return (
      <div>
        <h2>Redux Functional component</h2>
        {/* <button onClick={fetchUsersSuccess}>Fetch data</button> */}
        <ul>
                { users.map(item => (
                    <li key={item.id}>{item.name}</li>
                ) ) }
        </ul>
      </div>
    );
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

export default connect(mapStateToProps,mapDispatchToProps)(ReduxComp)

