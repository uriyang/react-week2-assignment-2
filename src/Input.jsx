import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ onClick }) {
  return (
    <p>
      <input type="text" placeholder="할 일을 입력해주세요" />
      <button type="button" onClick={onClick}>추가</button>
    </p>
  );
}

Input.propTypes = {
  onClick: PropTypes.func.isRequired,
};
