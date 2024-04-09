import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ auth, Component, ComponentAdmin}) {
    if(auth.isLoading){
        return <h2>Loading...</h2>
    }else if(!auth.isAuthenticated){
        return <Navigate to="/login"/>
    }else{
        if (auth.user.is_staff)return <ComponentAdmin/>
        return <Component/>
    }
};
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);