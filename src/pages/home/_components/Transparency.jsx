import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Transparency = () => {
  const donutData = [
    { name: 'USDC in circulation', value: 30 },
    { name: 'USDC in-circulation', value: 70 },
  ];

  const COLORS = ['#36A2EB', '#2F2F2F'];

  const issuanceData = [
    {
      label: '7 Day Change',
      circulation: '$38.1B',
      reserves: '$38.3B',
      change: '+1.4B'
    },
    {
      label: '30 Day Change',
      circulation: '$38.1B',
      reserves: '$38.3B',
      change: '+1.4B'
    },
    {
      label: '365 Day Change',
      circulation: '$38.1B',
      reserves: '$38.3B',
      change: '+1.4B'
    },
  ];

  return (
    <div className='bg-gradient-to-r from-blue-50 via-white to-blue-50'>
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 ">
      <h1 className="text-4xl font-bold text-center mb-4">
        Transparency & stability
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Lorem ipsum dolor sit amet consectetur. Non volutpat risus faucibus senectus mi. Mauris bibendum amet diam in viverra. Massa scelerisque sed.
      </p>
     <div className='flex'>
     <h2 className="text-2xl font-semibold mb-6">Reserves Composition</h2>
        
        
        
     </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Reserves Composition */}
        
        <div className="flex-1 bg-gray-200 rounded-xl p-6">
          
          
          <div className="flex">
            {/* Stats Column */}
            <div className="flex flex-col md:ml-16 justify-center w-1/3">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">In circulation</p>
                  <p className="text-2xl font-bold">$38.1B</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Reserves</p>
                  <p className="text-2xl font-bold">$38.3B</p>
                </div>
                <div className="text-blue-500 font-semibold">+$1.4B</div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="relative w-2/2">
              <PieChart width={300} height={300}>
                <Pie
                  data={donutData}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute top-[49%] left-[50%]  md:top-[49%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center sm:top-[49%] sm:left-[40%]">
                <div className="font-semibold">+$1.4B</div>
                <div className="text-gray-500">November</div>
              </div>
            </div>
          </div>
                 {/* Legend */}
      <div className="flex justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-blue"></div>
          <span className="text-sm text-gray-600">USDC in circulation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-chart-dark"></div>
          <span className="text-sm text-gray-600">USDC in-circulation</span>
        </div>
      </div>
        </div>

        {/* Right Section - Issuance & Redemption */}
       
        <div className="flex-1">
        <h2 className="text-2xl font-semibold md:-mt-12 mb-6">Issuance & Redemption</h2>
          <div className="space-y-4">
            {issuanceData.map((item, index) => (
              <div key={index} className="bg-gray-200 rounded-xl p-4">
                <p className="text-gray-500 text-sm mb-2">{item.label}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold">{item.circulation}</p>
                    <p className="text-gray-500 text-sm">In circulation</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{item.reserves}</p>
                    <p className="text-gray-500 text-sm">Reserves</p>
                  </div>
                  <div className="text-blue-500 font-semibold">{item.change}</div>
                </div>
              </div>
            ))}
      
          </div>
        </div>
      </div>

     

      <p className="text-gray-600 text-center mt-12">
        Lorem ipsum dolor sit amet consectetur. Risus lacus odio risus sit. Mi in faucibus elementum pulvinar risus condimentum nulla lacus. Ipsum egestas elementum at nec fusce sapien fames ut. Elementum in ut vestibulum.
      </p>
    </div>
    </div>
  );
};

export default Transparency;
