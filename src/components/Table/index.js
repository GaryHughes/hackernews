// @ts-check
import React, { Component } from 'react';
import { sortBy } from 'lodash';
import classNames from 'classnames';
import './index.css'
import { Button } from '../Button';
import PropTypes from 'prop-types';

const largeColumn = {
    width: '40%',
};

const midColumn = {
    width: '30%',
};

const smallColumn = {
    width: '10%',
};

const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),
};

const Sort = ({ 
    sortKey, 
    activeSortKey, 
    onSort, 
    children 
}) => {

    const sortClass = classNames(
        'button-inline',
        { 'button-active': sortKey === activeSortKey }
    );

    return (
        <Button 
            onClick={() => onSort(sortKey)} 
            className={sortClass}
        >
            {children}
        </Button>
    )    
}

export class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortKey: 'NONE',
            isSortReverse: false
        };
        this.onSort = this.onSort.bind(this);
    }

    onSort(sortKey) {
        const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
        this.setState({ sortKey, isSortReverse });
    }

    render() {

        const {
            list, 
            onDismiss
        } = this.props;

        const {
            sortKey,
            isSortReverse
        } = this.state;

        const sortedList = SORTS[sortKey](list);
        const reverseSortedList = isSortReverse
            ? sortedList.reverse()
            : sortedList;

        return (
            <div className="table">
                <div className="table-header">
                <span style={{ width: '40%' }}>
                    <Sort
                    sortKey={'TITLE'}
                    activeSortKey={sortKey}
                    onSort={this.onSort}
                    >
                    Title
                    </Sort>
                </span>
                <span style={{ width: '30%' }}>
                    <Sort
                    sortKey={'AUTHOR'}
                    activeSortKey={sortKey}
                    onSort={this.onSort}
                    >
                    Author
                    </Sort>
                </span>
                <span style={{ width: '10%' }}>
                    <Sort
                    sortKey={'COMMENTS'}
                    activeSortKey={sortKey}
                    onSort={this.onSort}
                    >
                    Comments
                    </Sort>
                </span>
                <span style={{ width: '10%' }}>
                    <Sort
                    sortKey={'POINTS'}
                    activeSortKey={sortKey}
                    onSort={this.onSort}
                    >
                    Points
                    </Sort>
                </span>
                <span style={{ width: '10%' }}>
                    Archive
                </span>
                </div>
                {reverseSortedList.map(item => 
                    <div key={item.objectID} className="table-row">
                        <span style={largeColumn}>
                        <a href={item.url}>{item.title}</a>
                        </span>
                        <span style={midColumn}>
                        {item.author}
                        </span>
                        <span style={smallColumn}>
                        {item.num_comments}
                        </span>
                        <span style={smallColumn}>
                        {item.points}
                        </span>
                        <span style={smallColumn}>
                        <Button 
                            onClick={() => onDismiss(item.objectID)} 
                            className="button-inline"
                            >
                            Dismiss
                        </Button>
                        </span>
                    </div>
                )}
            </div>
        )
    }
};

Table.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        objectID: PropTypes.string.isRequired,
        author: PropTypes.string,
        url: PropTypes.string,
        num_comments: PropTypes.number,
        points: PropTypes.number,
      })
    ).isRequired,
    onDismiss: PropTypes.func.isRequired,
  };
  