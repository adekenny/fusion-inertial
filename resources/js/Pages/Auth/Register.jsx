import React, { useEffect } from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import VisitorsLayout from '@/Layouts/VisitorsLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';



export default function Register() {

    const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <VisitorsLayout>
    <Transition.Root show={open} as={Fragment}>
      
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
     
        >
          <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
            
          <div className="flex min-h-full items-end justify-center p-4 text-left sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
             
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl px-8 pb-4 transition-all sm:my-8 sm:w-full sm:max-w-md">
                  <div style={{float:"right", paddingTop:10}}>
                      <Link href={route('home')} className="font-bold text-gray-400">X</Link>                  </div>
              <Head title="Log in" />
            <div className="py-4 text-xl font-semibold">
               Sign-up Here
            </div>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="flex space-x-4 py-4 justify-between">
                <button className="bg-blue-700 py-2 px-4 rounded-md text-white text-sm">Sign-in with Facebook</button>
                <button className="bg-white border-2 border-stone-400 py-2 px-4 rounded-md text-gray-800 text-sm">Sign-in with Google</button>
            </div>
            <hr className="mx-auto w-40 bg-blue-400 my-4 dark:bg-blue-700" />
            <form onSubmit={submit}>
            <div className="flex space-x-4">
                <div>
                    <InputLabel forInput="fullname" value="Firstname" />

                    <TextInput
                        type="text"
                        name="firstname"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                        placeholder="Firstname"
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="fullname" value="Surname" />

                    <TextInput
                        type="text"
                        name="firstname"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                        placeholder="Firstname"
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                </div>
                <div className="flex space-x-4">
                <div className="mt-4"> 
                    <InputLabel forInput="Category" value="Category" />

                    <TextInput
                        type="text"
                        name="Surname"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4"> 
                    <InputLabel forInput="Category" value="Phone Number" />

                    <TextInput
                        type="text"
                        name="Surname"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                </div>
                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="flex space-x-4">
                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>
                </div>
                <div className="flex items-center justify-end mt-4 text-sm text-gray-600 ">
                Existing User? &nbsp;&nbsp;
                    <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                        Pease sign-in here
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
            
          
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      
    </Transition.Root>
    </VisitorsLayout>
    );
}
