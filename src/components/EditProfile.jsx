import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = (user) => {
  const [firstName, setFirstName] = useState(user.user.firstName);
  const [lastName, setLastName] = useState(user.user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.user.photoUrl);
  const [age, setAge] = useState(user.user.age);
  const [gender, setGender] = useState(user.user.gender);
  const [skills, setSkills] = useState(user.user.skills);
  const [about, setAbout] = useState(user.user.about);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const handleSaveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          skills,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      //TODO: Error handline
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-10 min-h-96 m-20">
        <div className="flex justify-center">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <div className="flex flex-row">
                  <div className="flex flex-col items-start label pt-0 pb-0">
                    <span className="label-text">First Name</span>
                    <label className="input input-md h-8 input-bordered flex items-center my-2 max-w-36 mr-3">
                      <input
                        type="text"
                        className="grow"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-start label pt-0 pb-0">
                    <span className="label-text">Last Name</span>
                    <label className="input input-md h-8 input-bordered flex items-center my-2 max-w-36">
                      <input
                        type="text"
                        className="grow"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col items-start label pt-0 pb-0">
                    <span className="label-text">Age</span>
                    <label className="input input-md h-8 input-bordered flex items-center my-2 max-w-36 mr-3">
                      <input
                        type="text"
                        className="grow"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-start label pt-0 pb-0">
                    <span className="label-text">Gender</span>
                    <label className="input input-md h-8 input-bordered flex items-center my-2 max-w-36">
                      <input
                        type="text"
                        className="grow"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-start label pt-0 pb-0">
                  <span className="label-text">About</span>
                  {/* <label className="input input-md h-8 input-bordered flex items-center my-2 min-w-full">
                    <input
                      type="text"
                      className="grow"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </label> */}
                   <textarea
                      type="text"
                      placeholder="Your Bio"
                      className="textarea textarea-neutral  my-2 min-w-full"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex flex-col items-start label pt-0 pb-0">
                  <span className="label-text">Skills</span>
                  <label className="input input-md h-8 input-bordered flex items-center my-2 min-w-full">
                    <input
                      type="text"
                      className="grow"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </label>
                </div>
                <div className="flex flex-col items-start label pt-0 pb-0">
                  <span className="label-text">Photo URL</span>
                  <label className="input input-md h-8 input-bordered flex items-center my-2 min-w-full">
                    <input
                      type="text"
                      className="grow"
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              {/* <p className="flex text-red-500 justify-center">{error}</p> */}
              <div className="card-actions justify-center">
                <button
                  className="btn btn-secondary"
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, skills, about }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
