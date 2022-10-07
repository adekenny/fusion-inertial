import React from 'react';

export default function Videos({videos}){

    return(<>
        <div>
          <h1 className="pt-10 px-10 text-xl text-purple-900 font-bold">Interior Design Videos</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 py-4 px-10">
          {videos.map(item=>(
    
    <div className="overflow-hidden shadow-md flex flex-col rounded-lg border-gray-400 mb-3 bg-cyan-900">
    
    <div className="object-fill w-full h-52"><iframe width="320" height="200" src={item.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe></div>
    <div className="px-5 py-3">
    <div className="font-semibold text-md mb-2 text-white">{item.title}</div>
    
    <p className="text-gray-700 text-sm leading-6">
    {item.description}
    </p>
    
    </div>
    
    </div>
    
          ))}
     
        </div>
        <div className="flex flex-row-reverse px-10 mt-0">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 rounded-full w-full sm:w-full md:w-60 lg:w-60">
      see all videos
      </button>
    </div>
        </>)
}