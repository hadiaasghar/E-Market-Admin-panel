import React from 'react'
import { NavLink } from 'react-router-dom';

const CategoryHead = () => {
  const navLinks = [
    { name: 'Category Informations', path: '/categories/create' },
    { name: 'Review Atttributes', path: '/categories/create/review-attribute' },

  ];
  return (
    <div>
      <header className="border-b my-4">
      <div className="mx-auto p-4 flex justify-between items-center">
        <nav className="flex space-x-4">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-primary-900 font-semibold border-b-2 border-primary-900" : "text-gray-800"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
    </div>
  )
}

export default CategoryHead
