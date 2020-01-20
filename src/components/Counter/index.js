import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './index.css';

const Counter = (props) => {
    const {
        amount,
        ...other
    } = props;

    const counterClasses = classNames(
        'counter',
    );


    return (
        <div class={counterClasses} {...other}>
            <button>
                -
      </button>
            <input type='text' readonly value={amount} />
            <button>
                +
      </button>
        </div>
    );
};

Counter.propTypes = {
    amount: PropTypes.number,
};

Counter.defaultProps = {
    amount: 0
};

export default Counter;