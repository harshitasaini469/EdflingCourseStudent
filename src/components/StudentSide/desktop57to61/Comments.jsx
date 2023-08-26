import React from "react";
import LikeDislikeComment from "./LikeDislikeComment";

const Comments = () => {
  return (
    <div className="comments-container p-2 md:p-6 lg:p-8">
      <div className="flex flex-row space-x-2 items-start md:items-center">
        <div className="rounded-full md:mb-0">
          <img src="/desktop57to61/MUZEEBURRAHAMAN.png" alt="" className="" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium">MUZEEBURRAHAMAN</p>
          <p className="text-xs">12 days ago</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          ipsa neque possimus dolores vel delectus id distinctio velit earum
          dolor. Est saepe sed vel non quae rem facilis doloribus magnam! Labore
          architecto eum fugit dicta, nulla distinctio perspiciatis ad aliquam
          accusantium recusandae qui quae, optio, dolores in hic modi laudantium
          rerum ipsum. Reiciendis sunt nemo minus nesciunt. Debitis, quas quia.
          Exercitationem ipsa delectus quaerat quam iusto cumque dolores aliquid
          totam dolorum labore ad atque itaque, quasi molestias officiis harum
          deleniti expedita nulla ut, cupiditate porro! Culpa laudantium laborum
          consectetur suscipit!
        </p>
      </div>
      <div className="mt-2">
        <LikeDislikeComment size={'comment'} />
      </div>
    </div>
  );
};

export default Comments;
