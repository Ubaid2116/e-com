"use client"

import AddToBasketButton from '@/components/AddToBasketButton'
import useBasketStore from '@/sanity/lib/products/store'

function BasketPage() {
    const groupedItems = useBasketStore((state) => state.getGroupedItems())

    if (groupedItems.length === 0) {
        return(
            <div className='container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]'>
                <h1 className='text-2xl font-bold mb-6 text-gray-800'>Your Basket</h1>
                <p className='text-gray-600 text-lg'>Your basket is empty</p>
            </div>
        )
    }

    console.log("BASKET CONTENTS", groupedItems)

  return (
    <div className='container mx-auto p-4 max-w-6xl'>
        <h1 className='text-2xl font-bold mb-4'>Your Basket</h1>
        <div className='flex flex-col lg:flex-row gap-8'>
            <div className='flex-grow'>
                {groupedItems?.map((item) => (
                    <div key={item.product._id} className='mb-4 p-4 border flex items-center justify-between'>
                        <div>{item.product.name}</div>
                        <div className='flex items-center ml-4 flex-shrink-0'>
                            <AddToBasketButton product={item.product} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BasketPage;