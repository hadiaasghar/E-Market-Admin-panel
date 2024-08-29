
import Roles from "./Roles";
import RolesDetalies from "./RolesDetalies";

const AccessControl = () => {
  return (
    <div>
      <Roles />
      {/* <RolesDetalies /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Roles />} />
          <Route path="/rolesdetailes" element={<RolesDetalies />} />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path="/" element={<AdminUser />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default AccessControl;
