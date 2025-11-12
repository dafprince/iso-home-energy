/* ========================================
   SELECT - ULTRA PREMIUM
   Liste déroulante stylée
   ======================================== */

import './Select.css';

const Select = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  options = [],
  error,
  touched,
  required = false,
  disabled = false,
  placeholder = 'Sélectionnez une option',
  className = '',
  ...props
}) => {
  return (
    <div className={`select-wrapper ${className}`}>
      {label && (
        <label htmlFor={name} className="select-label">
          {label} {required && <span className="select-required">*</span>}
        </label>
      )}
      
      <div className="select-container">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`select ${error && touched ? 'select-error' : ''}`}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-arrow">▼</span>
      </div>
      
      {touched && error && (
        <span className="select-error-message">{error}</span>
      )}
    </div>
  );
};

export default Select;