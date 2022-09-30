import React from 'react';

export default function InteriorDecorations({decor}){

    return(<>
    
    <div>
      <h1 className="pt-6 pb-6 px-10 text-xl text-purple-900 font-bold">Browse Interior Decorations</h1>
    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6 py-4 px-10">
      {decor.map(item=>(

<div className="overflow-hidden shadow-md flex flex-col rounded-lg  bg-slate-100 border-gray-400 mb-2">
<img className="object-fill w-full h-48 hover:grayscale transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110  " src={item.source} alt="Sunset in the mountains" />
<div className="px-5 py-2">
<div className="font-semibold text-md mb-2 text-gray-900 leading-6">{item.title}</div>

</div>

</div>

      ))}
 
    </div>

    </>)
}