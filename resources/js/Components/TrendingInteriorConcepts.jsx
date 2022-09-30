import React from 'react';

export default function TrendingInteriorConcepts({featured}){

    return(<>
    <div>
      <h1 className="pt-10 px-10 text-xl text-purple-900 font-bold">Trending  Interior Concepts</h1>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 py-10 px-10">
      {featured.map(item=>(

<div className="overflow-hidden shadow-md flex flex-col rounded-lg border-gray-400 mb-3  bg-slate-100">
<img className="object-fill w-full h-52 hover:grayscale transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110  " src={item.source} alt="Sunset in the mountains" />
<div className="px-5 py-3">
<div className="font-semibold text-md mb-2 prose prose-zinc">{item.title}</div>

<p className="text-gray-700 text-sm leading-6">
{item.description}
</p>

</div>

</div>

      ))}
 
    </div>
    </>)
}