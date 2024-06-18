import React from 'react'

const Mypage = () => {
  return (
    <div className='max-w-4xl mx-auto mt-8 pb-16'>
        <h2 className='mb-8 text-2xl font-bold'>Mypage</h2>
        <div>
            <div className="avatar mb-4">
                <div className="w-24 rounded">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <h3 className='mb-2 font-medium text-2xl'>Jhon doe</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
  )
}

export default Mypage