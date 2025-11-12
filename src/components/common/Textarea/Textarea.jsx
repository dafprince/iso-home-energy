/* ========================================
   TEXTAREA - ULTRA PREMIUM
   Zone de texte stylée
   ======================================== */

import './Textarea.css';

const Textarea = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  touched,
  required = false,
  disabled = false,
  rows = 4,
  maxLength,
  className = '',
  ...props
}) => {
  return (
    <div className={`textarea-wrapper ${className}`}>
      {label && (
        <div className="textarea-label-row">
          <label htmlFor={name} className="textarea-label">
            {label} {required && <span className="textarea-required">*</span>}
          </label>
          {maxLength && (
            <span className="textarea-counter">
              {value?.length || 0} / {maxLength}
            </span>
          )}
        </div>
      )}
      
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        className={`textarea ${error && touched ? 'textarea-error' : ''}`}
        {...props}
      />
      
      {touched && error && (
        <span className="textarea-error-message">{error}</span>
      )}
    </div>
  );
};

export default Textarea;