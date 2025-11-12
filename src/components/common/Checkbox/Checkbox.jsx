/* ========================================
   CHECKBOX - ULTRA PREMIUM
   Cases à cocher stylées
   ======================================== */

import './Checkbox.css';

const Checkbox = ({
  name,
  label,
  checked,
  onChange,
  error,
  touched,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`checkbox-wrapper ${className}`}>
      <label className={`checkbox-label ${disabled ? 'checkbox-disabled' : ''}`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="checkbox-input"
          {...props}
        />
        <span className="checkbox-custom">
          <svg className="checkbox-icon" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="checkbox-text">{label}</span>
      </label>
      
      {touched && error && (
        <span className="checkbox-error-message">{error}</span>
      )}
    </div>
  );
};

export default Checkbox;