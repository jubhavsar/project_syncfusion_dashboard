import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css'

const app = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zindex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{ background: 'blue', borderRadius: "50%" }}
                className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray">
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default app