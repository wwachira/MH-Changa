import React from 'react';

const Home = () => {
  return (
    <div className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/5699432/pexels-photo-5699432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <h1 className="text-4xl font-bold text-white">Welcome to MH-Changa</h1>
      <p className="text-xl text-white mt-4">Support Mental Health Recovery</p>
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Donate via M-Pesa
      </button>
    </div>
  );
};

export default Home;