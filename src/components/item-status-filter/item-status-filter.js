import React from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends React.Component{

    buttons = [
        {label: "All", filter: "all"},
        {label: "Active", filter: "active"},
        {label: "Done", filter: "done"},
    ]

    render() {

        const buttons = this.buttons.map(( {label, filter} ) => {
            const isActive = this.props.filter === filter
            const _class = `btn ${isActive ? "btn-info": "btn-outline-secondary"}`
            return (
                <button
                    key={filter}
                    type="button"
                    className={_class}
                    onClick={() => this.props.onFilterChange(filter)}
                >
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}


export default ItemStatusFilter;