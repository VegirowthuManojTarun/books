import axios from "axios";
import React, { useState } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton/BackButton";
import { useSnackbar } from "notistack";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const DeleteBook = () => {
    setLoading(true);
    axios
      .delete(`/api/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Failed", { variant: "error" });
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-3xl">Do you want delete for real?</h3>
        <button className="bg-red-600 p-4 m-8 w-full" onClick={DeleteBook}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
