import React from "react";

const ConnectionCard = (user) => {
  user = user.user;

  return (
    <div className="flex flex-col m-auto  w-2/3">
      <div className="collapse collapse-plus bg-base-300 border border-lime-400 my-2">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          <p>
            {user.firstName} {user.lastName},
            <span className="px-2">
              {user.age} | {user.gender}
            </span>
          </p>
          <p className="my-2">{user.about}</p>
        </div>
        <div className="collapse-content text-m">
          <div className="card-actions justify-center">
            <button className="btn bg-green-500 btn-ghost border text-base-300">Chat</button>
          </div>
          {/* <div className="flex gap-4 py-2 my-4 w-96">
            <figure>
              <img src={user.photoUrl} alt={user.firstName} />
            </figure>
            <div className="flex flex-col">
              <div className="card-actions my-2">
                {user.skills.map((skill) => {
                  return <div className="badge badge-outline">{skill}</div>;
                })}
              </div>
              <div className="flex gap-4 justify-center my-4">
                <div className="card-actions justify-center">
                  <button className="btn bg-green-500 btn-ghost border text-base-300">
                    Chat
                  </button>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-secondary">Reject</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
