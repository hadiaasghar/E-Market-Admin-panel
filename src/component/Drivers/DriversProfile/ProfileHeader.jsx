import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ProfileHeader = ({ profileNavLinks }) => {
  return (
    <div>
      <header className="border-b my-4">
        <div className="mx-auto p-4 flex justify-between items-center">
          <nav className="flex space-x-4">
            {profileNavLinks.map((link, index) => (
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
  );
};

ProfileHeader.propTypes = {
  profileNavLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProfileHeader;