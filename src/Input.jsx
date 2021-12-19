import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ value, onChange, onClick }) {
  return (
    <p>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>추가</button>
    </p>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
