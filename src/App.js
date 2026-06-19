import AppLogo from './AppLogo.png'
import './App.css';
import BootstrapMessaging from './bootstrapMessaging';

const APP_VERSION = "1.1.1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AppLogo} className="App-logo" alt="logo" />
        <BootstrapMessaging />
        <div style={{
          position: "fixed",
          bottom: "10px",
          left: "10px",
          fontSize: "11px",
          color: "rgba(255,255,255,0.4)",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          userSelect: "none",
          pointerEvents: "none"
        }}>
          v{APP_VERSION}
        </div>
      </header>
    </div>
  );
}

export default App;
