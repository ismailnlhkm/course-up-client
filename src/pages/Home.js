import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";

function Home() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const { data: courses } = await axios({
        method: "get",
        url: "https://course-up.herokuapp.com/courses",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      setCourses(courses);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div style={{ backgroundColor: "#F0F2F5" }}>
      <div>
        <Navbar />
      </div>
      <div className="container min-vh-100" style={{ backgroundColor: "#F0F2F5" }}>
        <div className="row mt-5">
          <h1 className="display-5">
            <strong>Our Courses</strong>
          </h1>
          {courses.length === 0 ? (
            <div className="spinner-border mx-auto mt-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            ""
          )}
          {courses?.map((course, index) => {
            return <CourseCard course={course} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
