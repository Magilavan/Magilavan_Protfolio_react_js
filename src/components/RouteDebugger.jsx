import { useLocation } from 'react-router-dom';

function RouteDebugger() {
  const location = useLocation();
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      right: 0, 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999 
    }}>
      Current Route: {location.pathname}
    </div>
  );
}

export default RouteDebugger;