import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestsSlice";

const RequestCard = (user) => {
  user = user.user.fromUserId;
  const _id = user._id;
  const dispatch = useDispatch();
  const reviewRequest = async (status, _id) => {
    console.log("URL => ", BASE_URL + "/request/review/" + status + "/" + _id);

    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      //   console.log("res => ", res);
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col m-auto  w-1/2">
        <div className="collapse collapse-plus bg-base-300 border border-lime-400 my-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            <p>
              {user.firstName + " " + user.lastName},
              <span className="px-2">{user.age + "| " + user.gender}</span>
            </p>
            <p className="my-2">{user.about}</p>
          </div>
          <div className="collapse-content text-m">
            <div className="flex justify-between items-center gap-4 py-2 my-4 w-96">
              <figure>
                <img src={user.photoUrl} alt={user.firstName} />
              </figure>
              <div className="flex flex-col">
                <div className="card-actions my-2">
                  {user.skills.map((skill) => {
                    return (
                      <div key={skill} className="badge badge-outline">
                        {skill}
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-4 justify-center my-4">
                  <div className="card-actions justify-center">
                    <button
                      className="btn bg-green-500 btn-ghost border text-base-300"
                      onClick={() => reviewRequest("accepted", _id)}
                    >
                      Accept
                    </button>
                  </div>
                  <div className="card-actions justify-center">
                    <button
                      className="btn btn-secondary"
                      onClick={() => reviewRequest("rejected", _id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
