import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function GetCourse() {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryId > 0) {
      try {
        const { data: addCourse } = await axios({
          method: "POST",
          url: `https://course-up.herokuapp.com/courses/mycourses/add/${categoryId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        swal(addCourse);
        navigate("/course/mycourse");
      } catch (err) {
        console.log(err.response.data.message);
      }
    } else {
      swal("Plese select course!");
    }
  };

  return (
    <div style={{ backgroundColor: "#F0F2F5" }}>
      <div>
        <Navbar />
      </div>
      <div className="container min-vh-100" style={{ backgroundColor: "#F0F2F5" }}>
        <div className="row mt-5">
          <h1 className="display-5">
            <strong>Select Course</strong>
          </h1>

          <form className="mx-auto text-start" style={{ maxWidth: "490px" }}>
            <select
              className="form-select mb-3"
              onChange={(e) => {
                setCategoryId(e.target.value);
              }}
            >
              <option selected disabled>
                Select...
              </option>
              <option value="1">C++</option>
              <option value="2">Python</option>
              <option value="3">Javascript</option>
              <option value="4">Golang</option>
              <option value="5">PHP</option>
              <option value="6">HTML</option>
            </select>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="submit"
              className="btn btn-primary"
            >
              Get Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetCourse;
