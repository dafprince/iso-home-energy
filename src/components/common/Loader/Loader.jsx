/* ========================================
   LOADER COMPONENT - ISO HOME ENERGY
   Spinner de chargement
   ======================================== */

import './Loader.css';

const Loader = ({ 
  size = 'medium',
  color = 'green',
  fullScreen = false,
  text = ''
}) => {
  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className={`loader loader-${size} loader-${color}`}></div>
        {text && <p className="loader-text">{text}</p>}
      </div>
    );
  }

  return (
    <div className="loader-container">
      <div className={`loader loader-${size} loader-${color}`}></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;