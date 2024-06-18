"use client";

import React from 'react'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className='max-w-4xl mx-auto mt-8 pb-16'>
      <h2 className='mb-8 text-2xl font-bold'>Blog</h2>
      {data.map((item) => (
        <div>
          <Link href={`/blog/${item._id}`} className="card w-96 bg-base-100 shadow-xl" key={item._id}>
            <figure><img src={`https://res.cloudinary.com/dsl0go3gg/image/upload/v1718668996/${item.img}`} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </Link>
        </div>
      ))}
      <div className='mt-8'>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>New post</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-8">New post</h3>
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
              <button className="btn btn-primary block btn-wide w-full mt-8">Post</button>
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

export default Blog