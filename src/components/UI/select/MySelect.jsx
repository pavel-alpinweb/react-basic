import React from 'react';

const MySelect = ({options, defaultValue, value, onChangeHandler}) => {
    return (
        <div>
            <select
                value={value}
                onChange={event => onChangeHandler(event.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    );
};

export default MySelect;