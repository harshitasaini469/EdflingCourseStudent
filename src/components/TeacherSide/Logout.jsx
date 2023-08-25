import React, { useEffect, useState } from "react";
import LogoutModal from "./LogOutModal";
import UpcomingClasses from "./UpcomingClasses";
import TutoringHours from "./TutoringHours";
import PlacementStats from "./PlacementStats";

const Logout = () => {
  const [isModalOpen, setModalOpen] = useState(true); // Set initial state to true to open the modal

  return (
    <div className="font-poppins">
      <UpcomingClasses />

      <div className="mt-4 text-white flex flex-wrap items-center justify-center gap-5">
        <TutoringHours />
        <TutoringHours />
        <TutoringHours />
      </div>
      <PlacementStats />

      <div>
        <LogoutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default Logout;
