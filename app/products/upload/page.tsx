'use client';

import { sellYourItemAction } from '@/actions';
import SubmitButton from '@/app/components/submit-button';
import React from 'react'
import { useFormState } from 'react-dom';

const UploadFormPage: React.FC = () => {

    const initialState = {
        message: "",
        errors: null
    }

    const [state, formAction] = useFormState<any>(sellYourItemAction as any, initialState);

    return (
        <div className='px-12 pt-24 pb-12 min-h-screen max-w-[100rem] mx-auto flex flex-col lg:flex-row gap-56 '>
            <div>
                <h2 className='text-2xl lg:text-4xl mb-4 uppercase pt-12'>
                    Sell your item
                </h2>
                <p className='text-xl'>
                    Enter details in this form to start selling your item.
                </p>
            </div>
            <div className='mx-auto w-full h-full p-12 rounded-lg border-2 border-gray-500 border-opacity-10 shadow-lg bg-gray-953 '>
                {state?.type == "error" && (
                    <p className='text-lg mb-2 bg-green-951 border-2 border-gray-300 rounded-md p-2 my-4'>
                        {state.message}
                    </p>
                )}
                <form action={formAction}>
                    <div className='mb-6'>
                        <label htmlFor='name' className='block mb-2'>
                            Name
                        </label>
                        <input type='text' id='name' name='name' />
                        {state?.errors?.name && (
                            <span id='name-error' className='text-red-600 text-sm'>
                                {state.errors.name.join(",")}
                            </span>
                        )}
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='price' className='block mb-2'>
                            Price
                        </label>
                        <input type='number' id='price' name='price' />
                        {state?.errors?.price && (
                            <span id='price-error' className='text-red-600 text-sm'>
                                {state.errors.price.join(",")}
                            </span>
                        )}
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='description' className='block mb-2'>
                            Descripion
                        </label>
                        <textarea id='description' name='description' />
                        {state?.errors?.description && (
                            <span id='description-error' className='text-red-600 text-sm'>
                                {state.errors.description.join(",")}
                            </span>
                        )}
                    </div>


                    <div className='mb-6'>
                        <label htmlFor='imageUrl' className='block mb-2'>
                            Image
                        </label>
                        <input type='file' accept='image/*' id='imageUrl' name='imageUrl' />
                        {state?.errors?.imageUrl && (
                            <span id='imageUrl-error' className='text-red-600 text-sm'>
                                {state.errors.imageUrl.join(",")}
                            </span>
                        )}
                    </div>


                    <div className='mb-6'>
                        <label htmlFor='contactEmail' className='block mb-2'>
                            Contact Email
                        </label>
                        <input type='text' id='contactEmail' name='contactEmail' />
                        {state?.errors?.contactEmail && (
                            <span id='contactEmail-error' className='text-red-600 text-sm'>
                                {state.errors.contactEmail.join(",")}
                            </span>
                        )}
                    </div>

                    <SubmitButton />


                </form>
            </div>
        </div>
    )
}

export default UploadFormPage;
