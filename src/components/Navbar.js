import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  return (
    <>
      <h1 className="text-center py-4 text-primary">Project Management</h1>
      <p className="text-center lead">{`Currently ${tasksList.length} Task(s) Pending`}</p>
    </>
  );
};

export default Navbar;
