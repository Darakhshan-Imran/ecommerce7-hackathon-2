'use client';

import { useState } from 'react';
import Image from 'next/image';

// Icons (place these in the public/icons folder)
import Visa from '/public/paymenticons/Visa.png';
import PayPal from '/public/paymenticons/PayPal.png';
import Bitcoin from '/public/paymenticons/Bitcoin.png';


export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState<string>('credit-card');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
      <p className="text-gray-500 mb-6">Please enter your payment method</p>

      {/* Payment Options */}
      <div className="space-y-6">
        {/* Credit Card Option */}
        <label
          className={`block p-4 rounded-lg border cursor-pointer ${
            selectedMethod === 'credit-card'
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200'
          }`}
          onClick={() => setSelectedMethod('credit-card')}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="payment"
              className="mr-3"
              checked={selectedMethod === 'credit-card'}
              onChange={() => setSelectedMethod('credit-card')}
            />
            <span className="text-lg font-semibold text-gray-700">
              Credit Card
            </span>
            <div className="ml-auto flex space-x-2">
              <Image src={Visa} alt="Visa" width={70} height={60} />
            
            </div>
          </div>

          {/* Credit Card Form */}
          {selectedMethod === 'credit-card' && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="Card number"
                  className="input"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Expiration Date</label>
                <input
                  type="text"
                  placeholder="DD / MM / YY"
                  className="input"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">Card Holder</label>
                <input
                  type="text"
                  placeholder="Card holder"
                  className="input"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">CVC</label>
                <input type="text" placeholder="CVC" className="input" />
              </div>
            </div>
          )}
        </label>

        {/* PayPal Option */}
        <label
          className={`block p-4 rounded-lg border cursor-pointer ${
            selectedMethod === 'paypal'
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200'
          }`}
          onClick={() => setSelectedMethod('paypal')}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="payment"
              className="mr-3"
              checked={selectedMethod === 'paypal'}
              onChange={() => setSelectedMethod('paypal')}
            />
            <span className="text-lg font-semibold text-gray-700">PayPal</span>
            <div className="ml-auto">
              <Image src={PayPal} alt="PayPal" width={70} height={60} />
            </div>
          </div>
        </label>

        {/* Bitcoin Option */}
        <label
          className={`block p-4 rounded-lg border cursor-pointer ${
            selectedMethod === 'bitcoin'
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200'
          }`}
          onClick={() => setSelectedMethod('bitcoin')}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="payment"
              className="mr-3"
              checked={selectedMethod === 'bitcoin'}
              onChange={() => setSelectedMethod('bitcoin')}
            />
            <span className="text-lg font-semibold text-gray-700">Bitcoin</span>
            <div className="ml-auto">
              <Image src={Bitcoin} alt="Bitcoin" width={70} height={60} />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

  