/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState} from 'react'
import { TextareaAutosize } from '@mui/base'

const featured = [
{
      title: "Ajax Interiors",
      source: "images/int1.jpg",
      description: "An interior design company based in Lekki"
 },

 {
    title: "Homaland Interiors",
    source: "images/int2.jpg",
    description: "A creative interior designer based in VI"
 },
 {
    title: "Sleek Interior Design",
    source: "images/int3.jpg",
    description: "A interior firm based in Ikoyi"
},
{
  title: "Atlas Interiors",
  source: "images/int4.jpg",
  description: "Interior design firm based in Lagos"
},
{
  title: "AA Interior Design & Decorations",
  source: "images/int5.jpg",
  description: "A complete interior design and decoration company in Abuja"
},

{
  title: "Splendeur Interiors and Home",
  source: "images/int6.jpg",
  description: "Interior design firm based in Lagos and Abuja"
},

{
title: "House to Home Interiors",
source: "images/int7.jpg",
description: "An award winning interior design company in Lekki"
},
{
title: "Blue Lagoon Interiors",
source: "images/int8.jpg",
description: "Interior design and decoration company in VI and Lekki"
}

]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function handleImgClick(props){
return(
  <>
    <div>
      <img src={props.source} width="500px" height="500px" />
    </div>
  </>
);

}

export default function Homepage() {

  
    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'Interior Ideas', href: '#', current: false },
        { name: 'Find Professionals', href: '#', current: false },
        { name: 'Shop Online', href: '#', current: false },
     
      
      ]

    const topIcons = [

      {title: "Discover Design Ideas", icon:"images/interior.jpg"},
      {title: "Find Pros", icon:"images/pro.png"},
      {title: "Find Trainings", icon:"images/training.jpg"},
      {title: "Shop Products", icon:"images/cart.jpg"},
      {title: "Projects", icon:"images/projects.jpg"},
      {title: "Suggest Pro for me", icon:"images/suggest.jpg"},
    ]
      
      
    
  return (
      <>
      <div className="min-h-full w-full">
    <Disclosure as="nav" className="bg-gray-800 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="images/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'font-semibold text-orange-200' : 'text-white hover:bg-gray-700 hover:text-white',
                          'px-2 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                       
                      >
                          {item.name === "Find Professionals" ?
                             <Menu as="div" className="relative inline-block text-left">
                             <div>
                             
                             <Menu.Button className="inline-flex w-full justify-center   px-3 text-sm font-medium shadow-sm ">
          {item.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
                               
                             
                             </div>
                             <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex row-auto py-1 justify-content-md-center">
              <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            </div>
            <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Duplicate
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
          <div className="flex row-auto py-1">
          <div className="mr-10">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Archive
                </a>
              )}
            </Menu.Item>
            </div>
            <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Move
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Share
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Add to favorites
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
                            </Menu>

                            :

                            item.name === "Interior Ideas" ?

                            <Menu as="div" className="relative inline-block text-left">
                            <div>
                            
                            <Menu.Button className="inline-flex w-full justify-center   px-4 text-sm font-medium shadow-sm ">
         {item.name}
         <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
       </Menu.Button>
                              
                            
                            </div>
                            <Transition
       as={Fragment}
       enter="transition ease-out duration-100"
       enterFrom="transform opacity-0 scale-95"
       enterTo="transform opacity-100 scale-100"
       leave="transition ease-in duration-75"
       leaveFrom="transform opacity-100 scale-100"
       leaveTo="transform opacity-0 scale-95"
     >
       <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <div className="flex row-auto py-1">
             <div className="mr-10">
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 Edit
               </a>
             )}
           </Menu.Item>
           </div>
           <div>
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 Duplicate
               </a>
             )}
           </Menu.Item>
           </div>
         </div>
         <div className="flex row-auto py-1">
         <div className="mr-10">
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 Archive
               </a>
             )}
           </Menu.Item>
           </div>
           <div>
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 Move
               </a>
             )}
           </Menu.Item>
           </div>
         </div>
         <div className="py-1">
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 Share
               </a>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 Add to favorites
               </a>
             )}
           </Menu.Item>
         </div>
         <div className="py-1">
           <Menu.Item>
             {({ active }) => (
               <a
                 href="#"
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 Delete
               </a>
             )}
           </Menu.Item>
         </div>
       </Menu.Items>
     </Transition>
                           </Menu>

                           
                            :

                            item.name}
                      </a>
                    ))}
                  </div>
                </div>
                
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="text-white text-sm">Sign-In</div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm">
                      <span className="sr-only">Open user menu</span>
                      <div className="rounded-full bg-slate-200 text-black px-4 py-2 leading-4 text-sm">Sign-Up</div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            As Professional
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                          As Contractor
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                          Trainee
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className="fullwidth sm:w-full md:w-full lg:w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 h-auto flex pt-8 justify-center">
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
    <div>
      <h1 className="pt-10 px-10 text-xl">Trending  Interior Designs</h1>
    </div>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 py-10 px-10">
      {featured.map(item=>(

<div className="overflow-hidden shadow-xl flex flex-col rounded-lg bg-slate-100 border-gray-400 mb-3">
<img className="object-fill w-full h-52 hover:grayscale transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110  " src={item.source} alt="Sunset in the mountains" onClick={handleImgClick} />
<div className="px-5 py-3">
<div className="font-bold text-md mb-2 prose prose-zinc">{item.title}</div>

<p className="text-gray-700 text-sm leading-6">
{item.description}
</p>

</div>

</div>

      ))}
 
    </div>
    <div>
      <h1 className="pt-5 pb-12 px-10 text-xl">Art and Interior Accessories</h1>
    </div>

    <div>
      <h1 className="pt-5 pb-12 px-10 text-xl">Interior Design Artisans</h1>
    </div>

    <div>
      <h1 className="pt-5 pb-12 px-10 text-xl">Browse by Design Styles</h1>
    </div>

    <div>
      <h1 className="pt-5 pb-12 px-10 text-xl">Top Stories</h1>
    </div>
 </div>
 </>
  )
}