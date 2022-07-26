import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css'

const app = () => {
  const activeMenu = false;
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
            { activeMenu ? 
            ( 
            <div className='fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg'> 
              sidebar 
            </div> 
            ) : (
              <div className='w-0 bg-secondary-dark-bg'> 
                sidebar 
              </div>
            ) }
            <div
            className= {
            `dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full
            ${ activeMenu ? "md:ml-72": "min-h-screen flex-2" }` }>
            </div>
            <div className="fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar ">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
               {/* dashboard  */}
                <Route path="/" element="Ecommerce" />
                <Route path="/ecommerce" element="Ecommerce" />

                {/* pages  */}
                <Route path="/orders" element="Orders" />
                <Route path="/employees" element="Employees" />
                <Route path="/customers" element="Customers" />
                
                {/* apps  */}
                 <Route path="/kanban" element="Kanban" />
                <Route path="/editor" element="Editor" />
                <Route path="/calendar" element="Calendar" />
                <Route path="/color-picker" element="ColorPicker" />

                {/* charts  */}
                <Route path="/line" element="Line" />
                <Route path="/area" element="Area" />
                <Route path="/bar" element="Bar" />
                <Route path="/pie" element="Pie" />
                <Route path="/financial" element="Financial" />
                <Route path="/color-mapping" element="ColorMapping" />
                <Route path="/pyramid" element="Pyramid" />
                <Route path="/stacked" element="Stacked" />

               
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default app