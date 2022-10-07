import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState} from 'react'
import { TextareaAutosize } from '@mui/base'
import { Link, Head } from '@inertiajs/inertia-react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function Navigation({navigation}){



    return(<>
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start space-x-10">
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
                
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'font-semibold text-orange-200' : 'text-white hover:bg-gray-700 hover:text-white',
                          'px-0 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                       
                      >
                          {item.name === "Interior Ideas" ?
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
        <Menu.Items className="absolute left-0 z-10 mt-3 w-auto origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg p-2">
          <div className="flex row-auto space-x-10 w-auto justify-start">
          <div className="w-3/6">
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Livingroom
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Bedroom 
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Kitchen
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Bathroom
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
          <div className="flex row-auto justify-start space-x-10">
          <div className="w-auto">
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                 Kids' room
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                 Home Bar
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                 Hall 
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicationational
                </a>
              )}
            </Menu.Item>
            </div>
          </div>

          <div className="flex row-auto justify-content-center space-x-10">
          <div className="w-3/6">
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Designer
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicate
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplication
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="w-3/6">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicationational
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
          
       
        </Menu.Items>
      </Transition>
                            </Menu>

                            :

                            item.name === "Find Professionals" ?

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
        <Menu.Items className="absolute left-0 z-10 mt-3 w-auto origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg p-2">
        <div className="flex row-auto justify-content-center space-x-10">
            <div>
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Designer
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicate
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplication
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicationational
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
          <div className="flex row-auto justify-content-center space-x-10">
            <div>
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Designer
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicate
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplication
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicationational
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
       </Menu.Items>
     </Transition>
                           </Menu>

                           
                            :

                            item.name === "Shop Online" ?

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
        <Menu.Items className="absolute left-0 z-10 mt-3 w-auto origin-top-right divide-y divide-gray-300 rounded-md bg-white shadow-lg p-2">
        <div className="flex row-auto justify-content-center space-x-10">
            <div>
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Designer
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicate
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplication
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicationational
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
          <div className="flex row-auto justify-content-center space-x-10">
            <div>
            <Menu.Item>
            {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Designer
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicate
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplication
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
                    active ? 'bg-white text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:text-blue-800'
                  )}
                >
                  Duplicationational
                </a>
              )}
            </Menu.Item>
            </div>
          </div>
       </Menu.Items>
     </Transition>
                           </Menu>
                           :
                           item.name
}
                      </a>
                    ))}
                  </div>
                </div>
                
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-8 mr-8 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href={route('login')}><div className="text-white text-sm">Sign-In</div></Link>

                {/* Profile dropdown */}
                
                      <div className="rounded-full bg-slate-200 text-black px-4 py-2 leading-4 text-sm"><Link href={route('register')}>Sign-Up</Link></div>
                  
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
           </>)
} 