import React from "react";
import Sidebar from "../components/desktop65/Sidebar";
import ClassroomTopBanner from "../components/desktop65/ClassroomTopBanner";
import PlacementStats from "../components/desktop65/PlacementStats";
import Page65Card from "../components/desktop65/Page65Card";
import ExploreMore from "../components/desktop65/ExploreMore";
import { connect } from "react-redux";
import Separator from "../components/desktop65/Separator";

const Page65 = ({ isSidebarOpen }) => {
  let heading = "Placed Edflinger";
  let description =
    "Students who have pursued this course have managed to bag a job at reputed tech companies and emerging startups";
  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="p-3 md:ml-64  justify-center items-center border w-full space-y-5 h-[100vh] overflow-y-scroll no-scrollbar">
        <ClassroomTopBanner
          heading={heading}
          description={description}
          image={"/desktop65/companies.png"}
        />
        <PlacementStats />
        <div>
        <Separator content="You College Mates"/>

          <div className="flex flex-wrap gap-3 justify-center items-center mt-3">
            <Page65Card />
            <Page65Card />
            <Page65Card />
            <Page65Card />
            <Page65Card />
            <Page65Card />
          </div>
        </div>
        <div className="mx-auto w-fit">
          <ExploreMore />
        </div>
        <Separator content="You Batch Mates"/>

        <div className="">
          <div className="flex flex-wrap gap-3 justify-center items-center mt-3">
            <Page65Card />
            <Page65Card />
            <Page65Card />
            <Page65Card />
            <Page65Card />
            <Page65Card />
          </div>{" "}
        </div>

        <div className="mx-auto w-fit">
          <ExploreMore />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSidebarOpen: state.sidebar.isSidebarOpen,
});

export default connect(mapStateToProps)(Page65);
