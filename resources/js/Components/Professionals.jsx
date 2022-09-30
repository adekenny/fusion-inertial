import React from 'react';

export default function Professionals({professionals}){

    return(<>
        <div>
          <h1 className="pt-6 px-10 text-xl text-purple-900 font-bold">Find Professionals by Skill</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6 py-6 px-10">
          {professionals.map(item=>(
    
    <div className="overflow-hidden shadow-md flex flex-col rounded-lg  bg-slate-100 border-gray-400 mb-3">
    <img className="object-fill w-full h-52 hover:grayscale transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110  " src={item.source} alt="professionals photo" />
    <div className="px-5 py-2">
    <div className="font-semibold text-md mb-2 text-gray-900 leading-6">{item.title}</div>
    
   
    
    </div>
    
    </div>
    
          ))}
     
        </div>
        </>)
}