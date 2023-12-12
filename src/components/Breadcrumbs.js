import React from 'react';
import breadcrumb from '../img/breadcrumb.png'
import iconbreadrum from '../img/iconbreadrum.png'

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="text-gray-900 border shadow-sm rounded-md mt-2">
      <ol className="list-none inline-flex items-center px-3 py-2 text-lg font-medium">
        <li>
        <img src={breadcrumb} alt="Description" className='w-8 mr-4'/>
        </li>
        <li>
        <img src={iconbreadrum} alt="Description" className='w-6'/>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index !== breadcrumbs.length - 1 ? (
              <a href={breadcrumb.path} className="hover:text-gray-500 mr-3">
                {breadcrumb.label}
              </a>
            ) : (
              <span className="">{breadcrumb.label}</span>
            )}
            {index !== breadcrumbs.length - 1 && (
               <>
                   <img src={iconbreadrum} alt="Description" className='w-6'/>
             </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
