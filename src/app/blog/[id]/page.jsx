"use client";

import { notFound } from 'next/navigation'
import React from 'react'
import { CldImage } from 'next-cloudinary';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    return notFound();
  }
  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className='max-w-4xl mx-auto mt-8 pb-16'>
      <h2 className='mb-8 text-2xl font-bold'>{data.title}</h2>
      <div>
        <p>{data.desc}</p>
        <p>{data.username}</p>
        <div>
          <CldImage
            src="accessory-3002608_1280-min_eq9jng"
            width="500"
            height="500"
            crop={{
              type: 'auto',
              source: true
            }}
          />
        </div>
      </div>
      <div className='mt-8'>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Edit</button>
        {/* <button className="btn btn-error">Delete</button> */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-8">Edit</h3>
            <form action="">
              <div className='mb-4'>
                <p className='font-medium mb-2'>Title</p>
                <input type="text" className='border w-full p-4 rounded' />
              </div>
              <div className='mb-4'>
                <p className='font-medium mb-2'>Desc</p>
                <textarea name="" id="" className='border w-full p-4 rounded'></textarea>
              </div>
              <div className='mb-4'>
                <p className='font-medium mb-2'>Image</p>
                <input type="file" className="file-input w-full max-w-xs" />
              </div>
              <button className="btn btn-primary block btn-wide w-full mt-8">Done</button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn w-full block">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default BlogPost