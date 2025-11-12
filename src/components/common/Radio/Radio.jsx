/* ========================================
   RADIO - ULTRA PREMIUM
   Boutons radio stylés
   ======================================== */

import './Radio.css';

const Radio = ({
  name,
  label,
  options = [],
  value,
  onChange,
  error,
  touched,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`radio-wrapper ${className}`}>
      {label && (
        <label className="radio-label">
          {label} {required && <span className="radio-required">*</span>}
        </label>
      )}
      
      <div className="radio-group">
        {options.map((option, index) => (
          <label key={index} className="radio-item">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="radio-input"
              {...props}
            />
            <span className="radio-custom"></span>
            <span className="radio-text">{option.label}</span>
          </label>
        ))}
      </div>
      
      {touched && error && (
        <span className="radio-error-message">{error}</span>
      )}
    </div>
  );
};

export default Radio;