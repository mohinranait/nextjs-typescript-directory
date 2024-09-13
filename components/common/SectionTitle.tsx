import React from 'react'

interface Props {
    title: string,
    subTitle: string,
}


const SectionTitle: React.FC<Props> = ({ title, subTitle }) => {
    return (
        <div>
            <h3 className='text-gray-800 font-semibold text-4xl text-center'>{title}</h3>
            <p className='text-gray-600 text-center'>{subTitle}</p>
        </div>
    )
}

export default SectionTitle