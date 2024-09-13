import SectionTitle from '@/components/common/SectionTitle'
import { howWorks } from '@/components/constans/data'
import React, { Fragment } from 'react'

const HowWorks: React.FC = () => {
    return (
        <section className='py-10 home_category_section'>
            <div className="container ">

                <SectionTitle title='How It Works' subTitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, labore!' />
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 md:gap-5 lg:w-3/4 mx-auto mt-10'>
                    {
                        howWorks?.map((item, index) => <Fragment key={index}>
                            <div className='bg-white  gap-4 transition p-4 rounded-md border border-gray-200 flex items-center flex-col'>
                                <div><item.icon size={40} className='text-gray-800' /></div>
                                <p className='text-center text-gray-800'>{item?.title}</p>
                                <p className='text-center text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deleniti ut eveniet in soluta! Accusantium vitae eveniet sit est similique!</p>
                            </div>
                        </Fragment>)
                    }
                </div>
            </div>
        </section>
    )
}

export default HowWorks