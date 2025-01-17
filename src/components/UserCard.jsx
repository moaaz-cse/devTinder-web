import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  let { _id, firstName, lastName, age, gender, about, skills, photoUrl } = user;
  if (gender.toLowerCase() === "male") {
    gender = "M";
  } else if (gender.toLowerCase() === "female") {
    gender = "F";
  }
  const dispatch = useDispatch();

  const handleSendRequest = async (state, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + state + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-xls">
      <figure>
        <img src={photoUrl} alt={firstName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName + " " + lastName}
          {age && gender && (
            <div className="badge badge-sm">{age + " |" + gender}</div>
          )}
        </h2>
        <p>{about}</p>
        <div className="card-actions justify-start my-2">
          {skills.map((skill) => {
            return <div className="badge badge-outline">{skill}</div>;
          })}
        </div>
        <div className="flex gap-4 justify-center">
          <div className="card-actions justify-center">
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn bg-green-500 btn-ghost text-base-300"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
