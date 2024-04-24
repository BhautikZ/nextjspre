import React, { ReactNode } from "react";

interface Dashboardlayoutprops {
  children: ReactNode;
}

const Dashboardlayout: React.FC<Dashboardlayoutprops> = (props) => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About us</li>
          <li>Conatct Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="">
          <div className="h-screen bg-black w-[15vw] text-white">
            <ul className="flex  gap-8 flex-col py-2 pr-2">
              <li>Dashboard</li>
              <li>Todos</li>
              <li>User</li>
              <li>Profile</li>
            </ul>
          </div>
        </div>

        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
