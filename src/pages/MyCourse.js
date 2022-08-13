import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MyCourse() {
  const [courses, setCourses] = useState([]);

  const fetchMyCourses = async () => {
    try {
      const { data: courses } = await axios({
        method: "get",
        url: "https://course-up.herokuapp.com/courses/mycourses",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      console.log(courses);
      setCourses(courses);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const completeHandler = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "patch",
        url: `https://course-up.herokuapp.com/courses/mycourses/complete/${e.target.value}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      fetchMyCourses();
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const removeHandler = async (e) => {
    try {
      await axios({
        method: "delete",
        url: `https://course-up.herokuapp.com/courses/mycourses/remove/${e.target.value}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      fetchMyCourses();
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  useEffect(() => {
    fetchMyCourses();
  }, []);

  return (
    <div style={{ backgroundColor: "#F0F2F5" }}>
      <div>
        <Navbar />
      </div>
      <div className="container min-vh-100" style={{ backgroundColor: "#F0F2F5" }}>
        <div className="row mt-5">
          <h1 className="display-5">
            <strong>My Course</strong>
          </h1>
          {courses.length === 0 ? (
            <Link to="/course/get">
              <button type="button" className="btn btn-primary mt-3">
                Get Course
              </button>
            </Link>
          ) : (
            ""
          )}

          {courses?.map((course, index) => {
            return (
              <>
                <div className="col-md-auto ms-1 mt-4">
                  <div className="card shadow-sm" style={{ width: "18rem" }}>
                    <div class="d-flex align-items-center" style={{ minHeight: "10rem" }}>
                      <img src={course.Course.logo} className="card-img-top w-50 p-3 mx-auto" alt="course logo" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{course.Course.name}</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          {" "}
                          <p className="text-muted">Mentored By {course.Course.mentor}</p>
                        </li>
                        <li className="list-group-item">
                          <p className="text-muted">
                            <strong>
                              <i>{course.status}</i>
                            </strong>
                          </p>
                        </li>
                        <li className="list-group-item">
                          <button value={course.CourseId} onClick={(e) => completeHandler(e)} type="button" className={course.status !== "Completed" ? "btn btn-primary me-2" : "btn btn-primary me-2 disabled"}>
                            Complete
                          </button>
                          <button value={course.CourseId} onClick={(e) => removeHandler(e)} type="button" className="btn btn-secondary">
                            Remove
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyCourse;
