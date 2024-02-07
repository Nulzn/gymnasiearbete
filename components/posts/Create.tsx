"use client"
import { FormEvent } from 'react';
 
export default function Create() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        const formData = new FormData(event.currentTarget)
        const response = await fetch('./api/post', {
            method: 'POST',
            body: formData
        })
    
        // Handle response if necessary
        const data = await response.json()
        // ...
    }
 
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <input type="text" name="text" placeholder="Share your thoughts..." className=" border-b-2 border-gray-200 w-[35%] outline-none pb-2 text-wrap" />
        <button type="submit" className="flex justify-center bg-black text-white text-sm font-semibold px-4 py-[0.125rem] rounded-3xl hover:opacity-95 w-[8%]">Post</button>
    </form>
  )
}