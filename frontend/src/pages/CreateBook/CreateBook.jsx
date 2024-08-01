import axios from "axios";
import React, { useState } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import BackButton from "../../Components/BackButton/BackButton";
import { useSnackbar } from "notistack";
const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const addBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("/api/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
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
      <h1 className="text-3xl my-4">Add a book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[800px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            id="author"
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
            publishYear
          </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
            id="publishYear"
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button onClick={addBook} className="bg-sky-300 p-2 m-8">
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
