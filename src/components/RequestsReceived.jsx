import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RequestCard from "./RequestCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRequest } from "../utils/requestsSlice";

const RequestsReceived = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0)
    return (
      <h1 className="flex justify-center p-6 text-xl text-green-500">
        No new requests.
      </h1>
    );

  return (
    <div>
      {requests &&
        requests.map((request) => {
          return <RequestCard user={request} />;
        })}
    </div>
  );
};

export default RequestsReceived;
