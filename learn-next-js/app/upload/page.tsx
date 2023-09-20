'use client'
import React, { useState } from 'react'
import { CldUploadWidget ,CldImage} from 'next-cloudinary'

interface CloudinaryResult{
    public_id:string
}

const UploadPage = () => {
    const [publicId,setPublicId] = useState("");
    return (
        <>
        {publicId && <CldImage src={publicId??""} width={100} height={100} alt="image"/>}
        <CldUploadWidget options={{
            sources:['local'],
            multiple:false,
            maxFiles:5,
        }} uploadPreset="tyye8nhf" onUpload={(result)=>{
                if(result.event !== "success") return;
                const info = result.info as CloudinaryResult;
                setPublicId(info.public_id);
            }}>
            {
            ({ open }) => <button className='btn' onClick={() => open()} >Upload</button>
            }
        </CldUploadWidget>
        </>
    )
}

export default UploadPage
