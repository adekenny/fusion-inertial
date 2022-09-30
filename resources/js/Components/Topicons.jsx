import React from 'react';

export default function Topicons({topIcons}){

    return(
        <div className="fullwidth sm:w-full md:w-full lg:w-full bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 h-auto flex pt-8 justify-center">
          <div className="flex flex-col justify-center h-auto">
          <div>
            <h2 className="text-white text-center mb-2 text-2xl">Your one-stop place for eveything interiors</h2>
            <h2 className="text-white text-center text-sm">Professionals, artisans, Contractors, Clients, Apprentice</h2>
          </div>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-8 px-10">
            {topIcons.map(item=>(

            <div className="flex flex-col justify-center bg-white h-auto px-2 py-3 rounded-lg items-center">
                <div><img src={item.icon}  className="w-14 sm:w-16 md:w-16 lg:w-16 hover:grayscale hover:-translate-y-1 hover:scale-110  "/></div>
                <div className="text-md font-bold hover:text-red-600">{item.title}</div>
                
            </div>

            ))}
               
          </div>

          
          </div>
    </div>
    )
}