import SectionTitle from '@/components/common/SectionTitle'
import { categorys } from '@/components/constans/data'
import Link from 'next/link'
import React, { FC } from 'react'

const CategorySection: FC = () => {
    return (
        <section className='py-10 home_category_section'>
            <div className="container ">

                <SectionTitle title='Category' subTitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, labore!' />
                <div className='category_wraps grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 lg:w-3/4 mx-auto mt-10'>
                    {
                        categorys?.map((item, index) => <Link href={'/'} key={index}>
                            <div className='categoryItem bg-white hover:bg-gray-100 transition p-4 rounded-md border border-gray-200 flex items-center flex-col'>
                                <div><item.icon size={40} className='text-gray-800' /></div>
                                <p className='text-center text-gray-800'>{item?.name}</p>
                                <p className='text-center text-xs text-gray-500'>45 Items</p>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </section>
    )
}

export default CategorySection