import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from '../components/admin/common/sidebar/Sidebar'
import AdminLayout from "../layout/admin/AdminLayout";
import Header from "../components/admin/common/header/Header.jsx";


import TicketBooking from "../pages/backOfficer/TicketBookingManagement/ticketBooking";
import Traveler from "../pages/backOfficer/travelerManagement/traveler";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/backofficer/:paths?' exact>
            <AdminLayout className="wrapper">
             <Header/>
             <Sidebar/>
             
             
              <Route path="/backofficer/ticketbooking" component={TicketBooking} />
              <Route path="/backofficer/traveler" component={Traveler} />

            </AdminLayout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;


