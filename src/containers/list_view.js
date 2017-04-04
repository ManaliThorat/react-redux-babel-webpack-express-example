import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectItem, getListItem } from '../actions/list_actions';
import ListView  from '../components/ListView';

function mapStateToProps(state) {
    return {
        lists: state.lists.all,
        item: state.lists.item
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectItem: selectItem, getListItem: getListItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
