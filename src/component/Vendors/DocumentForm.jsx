import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import UploadDocument from '../../component/Vendors/UploadDocument';
import { ImCancelCircle } from "react-icons/im";

const DocumentForm = () => {
  const { documentName } = useParams();
  const [file, setFile] = useState(null);
  const [placeholderImage, setPlaceholderImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7"
  );

  useEffect(() => {
    // You can use documentName here to fetch data or set up initial state
    console.log("Document Name:", documentName);
  }, [documentName]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPlaceholderImage(null); // Hide placeholder image when a file is selected
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPlaceholderImage(
      "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7"
    ); // Restore placeholder image when the file is removed
  };

  const handleSave = () => {
    // Implement save logic
    alert("File saved!");
  };

  const handleRemovePlaceholderImage = () => {
    setPlaceholderImage(null);
  };

  return (
    <>
      <div className="w-[80%] mx-auto my-10 border border-gray-300 rounded-lg bg-white shadow-md relative">
        <div className="absolute -top-4 left-4 bg-primary-900 text-white rounded-lg p-2 ">
          <h2 className="text-center text-sm">
            {documentName ? documentName.toUpperCase() : "Loading..."}
          </h2>
        </div>
        <div className="p-4">
          <div className="mb-4 mt-3">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Front Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            {file && (
              <div className="relative mt-4">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  className="w-36 h-36 object-cover rounded-md"
                />
                <button
                  onClick={handleRemoveFile}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  &times;
                </button>
              </div>
            )}
          </div>
          {placeholderImage && !file && (
            <div className="w-36 h-36 relative mt-4">
              <img
                src={placeholderImage}
                className="w-36 h-36 object-cover rounded-md"
                alt="Placeholder"
              />
              <ImCancelCircle
                className="absolute top-0 right-0 m-2 text-red-700 text-2xl cursor-pointer"
                onClick={handleRemovePlaceholderImage}
              />
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <Link to="/document-list">
              <button className="bg-gray-500 text-white py-2 px-4 rounded-md w-full md:w-auto">
                Back
              </button>
            </Link>
            <button
              onClick={handleSave}
              className="-top-4 left-4 bg-primary-900 text-white py-2 px-4 rounded-md w-full md:w-auto"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentForm;
