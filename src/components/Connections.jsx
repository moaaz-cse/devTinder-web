import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connections) return;
  if (connections.length === 0)
    return (
      <h1 className="flex justify-center p-6 text-xl text-green-500">
        No Connection Found.
      </h1>
    );
  return (
    <div className="flex flex-col justify-center m-10">
      <p className="flex justify-center p-6 text-xl text-green-500">
        CONNECTIONS
      </p>
      {connections &&
        connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;

          return (
            <ConnectionCard
              key={_id}
              className="flex justify-center"
              user={{ _id, firstName, lastName, photoUrl, age, gender, about }}
            />
          );
        })}
    </div>
  );
};

export default Connections;
