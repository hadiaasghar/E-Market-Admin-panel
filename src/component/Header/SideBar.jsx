import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import PropTypes from "prop-types";
import { sidebarItems } from "../../Utils/data";

const SideBar = ({ isSidebarOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="h-full">
      <div className="sticky bg-white w-full h-12">
  <div className="sticky top-0">
    {isSidebarOpen ? (
      <img src="/E-Market-logo.png" alt="Logo" className="h-12 mx-auto p-1" />
    ) : (
      <img src="/logo-e.png" alt="Logo" className="h-12 mx-auto p-1" />
    )}
  </div>
</div>

      <div className="w-full flex flex-col justify-center bg-primary-900 text-white">
        {sidebarItems.map((section, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative flex border-b items-center hover:bg-primary-100 lg:w-full w-64 hover:text-primary-900">
              <Link to={section.path}>
                <button
                  className={`relative flex items-center justify-center h-12 w-full transition-all duration-300 ease-in-out hover:border-l-4 hover:border-primary-900`}
                >
                  <div className="w-12 flex justify-center items-center text-xl">
                    {section.icon}
                  </div>
                  <div
                    className={` flex items-center transition-transform duration-300 ease-in-out ${
                      isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                    }`}
                  >
                    {(isSidebarOpen || hoveredItem === index) && (
                      <div className={` h-12 ml-4 flex items-center whitespace-nowrap w-36 z-50  `}>
                        {section.title}
                      </div>
                    )}
                    {isSidebarOpen && section.subSections && (
                      <div className="text-white">
                        {hoveredItem === index ? (
                          <FaCaretDown />
                        ) : (
                          <FaCaretRight />
                        )}
                      </div>
                    )}
                  </div>
                </button>
              </Link>
            </div>

            {section.subSections && (
              <div
                className={`${
                  hoveredItem === index ? "block" : "hidden"
                } bg-primary-700 transition-all duration-300 ease-in-out`}
              >
                {section.subSections.map((subSection, subIndex) => (
                  <Link
                    to={subSection.path}
                    key={subIndex}
                    className="flex items-center px-8 py-2 hover:bg-primary-600 hover:text-white"
                  >
                    <div
                      className={`flex text-white justify-center w-8 p-2 transition-transform duration-300 ease-in-out ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                      }`}
                    >
                      {subSection.icon}
                    </div>
                    <span
                      className={`transition-transform duration-300 ease-in-out ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                      }`}
                    >
                      {subSection.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default SideBar;
