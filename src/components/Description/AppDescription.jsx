import React from 'react';

const AppDescription = ({description}) => {
    // console.log(description)
    return (
            <div className="px-10 py-8 bg-white rounded-2xl shadow-md my-10 max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">App Description</h3>
      <p className="text-gray-700 leading-7">{description}</p>
      </div>
    );
};

export default AppDescription;