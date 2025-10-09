import React from 'react';

const AppDescription = ({description}) => {
    return (
            <div className=" py-8  pb-10 px-15  mx-auto">
      <h3 className="text-2xl font-bold mb-4"> Description</h3>
      <p className="text-gray-700 leading-7">{description}</p>
      </div>
    );
};

export default AppDescription;