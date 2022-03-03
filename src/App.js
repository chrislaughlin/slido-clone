import MainContent from "./MainContent";

import { RoomProvider } from "@liveblocks/react";

function App() {
  return (
    <RoomProvider id="slide-clone">
      <div className="window main-content">
        <div className="title-bar">
          <div className="title-bar-text">Question time</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <MainContent />
        </div>
      </div>
    </RoomProvider>
  );
}

export default App;
