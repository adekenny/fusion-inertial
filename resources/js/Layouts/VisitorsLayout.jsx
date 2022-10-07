import React from 'react';
import Navigation from '@/components/Navigation';

const nav = [
    { name: 'Home', href: '#', current: true, submenu: false },
    { 
      name: 'Interior Ideas', 
      href: '#', 
      current: false,
      submenu:[
            {"title": "Screeding & Painting", "href": "#"},
            {"title": "TV Shelve Installer", "href": "#"},
            {"title": "Epoxy Floor Coating", "href": "#"},
            {"title": "Tiler", "href": "#"},
            {"title": "Furniture Make", "href": "#"},
            {"title": "POP Ceiling Installation", "href": "#"},
            {"title": "Window Curtain & Pelmet", "href": "#"},
            {"title": "Lightening & Fittings", "href": "#"},
            {"title": "Painter", "href": "#"},
      ]
      
     },
    {
       name: 'Find Professionals',
       href: "#",
       current: false,
       submenu:[
        {"title": "Screeding & Painting", "href": "#"},
        {"title": "TV Shelve Installer", "href": "#"},
        {"title": "Epoxy Floor Coating", "href": "#"},
        {"title": "Tiler", "href": "#"},
        {"title": "Furniture Make", "href": "#"},
        {"title": "POP Ceiling Installation", "href": "#"},
        {"title": "Window Curtain & Pelmet", "href": "#"},
        {"title": "Lightening & Fittings", "href": "#"},
        {"title": "Painter", "href": "#"},
       ]
      
    },
    { name: 'Shop Online', href: '#', current: false, submenu: false },
  
  ]

export default function VisitorsLayout({children}){
    return(<div className="h-screen flex flex-col items-center bg-fixed" style={{backgroundImage: `url(${"images/int3.jpg"})`}}>
     <Navigation navigation={nav} />
     
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
      
     </div>)
}