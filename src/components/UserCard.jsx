import React from "react";

const UserCard = (user) => {
  let { firstName, lastName, age, gender, about, skills, photoUrl } = user.user;
  if (gender === "male") {
    gender = "M";
  } else {
    gender = "F";
  }
  return (
    <div className="card bg-base-300 w-96 shadow-xls">
      <figure>
        <img src={photoUrl} alt={firstName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
          <div className="badge badge-sm">
            {age} | {gender}
          </div>
        </h2>
        <p>{about}</p>
        <div className="card-actions justify-start my-2">
          {skills.map((skill) => {
            return <div className="badge badge-outline">{skill}</div>;
          })}
        </div>
        <div className="flex gap-4 justify-center">
          <div className="card-actions justify-center">
            <button className="btn btn-secondary" >
              Ignore
            </button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-green-500 btn-ghost text-base-300" >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
