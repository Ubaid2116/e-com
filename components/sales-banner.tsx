import { COUPON_CODES } from "@/sanity/lib/sales/couponCode";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { Tag } from "lucide-react";

async function SalesBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.UCUBEX);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-black text-white p-8 sm:p-12 mx-4 mt-6 rounded-lg shadow-2xl transform transition duration-500 hover:shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-col text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-4">
            <Tag className="text-white w-8 h-8 sm:w-10 sm:h-10 mr-3 animate-bounce" />
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {sale.title}
            </h2>
          </div>
          <p className="text-xl sm:text-2xl font-semibold mb-6 max-w-lg">
            {sale.description}
          </p>
        </div>
        
        <div className="flex mt-6 sm:mt-0">
          <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
            <span className="font-bold text-lg sm:text-2xl">
              Use code <span className="text-red-600">{sale.couponCode}</span>
            </span>
            <span className="ml-2 font-bold text-lg sm:text-2xl">
              for {sale.discountAmount}% off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesBanner;
