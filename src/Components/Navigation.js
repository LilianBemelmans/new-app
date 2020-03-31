import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        var newsItem1 = "/news/" + "een";
        var newsItem2 = "/news/" + "twee";
        var active = { color: "#F0F", fontWeight: "bold" }

        return(
            <ul>
                <li><NavLink to={ newsItem1 }
                             activeStyle={ active }
                             exact={ true }> News #1 </NavLink>
                </li>
                <li><NavLink to={ newsItem2 }
                             activeStyle={ active }
                             exact={ true }> News #2 </NavLink>
                </li>
            </ul>
        );
    }
}