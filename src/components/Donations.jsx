import React from 'react';

const Donations = () => {
  return (
    <div className="p-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5699432/pexels-photo-5699432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="bg-white bg-opacity-75 p-6 rounded-lg">
        <h2 className="text-2xl font-bold">Donations So Far</h2>
        <p className="mt-4 text-xl">$10,000</p>
      </div>
    </div>
  );
};

export default Donations;