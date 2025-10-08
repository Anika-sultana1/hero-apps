import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {

const {id} = useParams();
const appId = parseInt(id)
const data = useLoaderData()
 const singleApp = data.find(app => app.id === appId )
 const {image, title}= singleApp;
    return (
       <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    );
};

export default AppDetails;