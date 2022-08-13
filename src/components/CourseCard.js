import GroupIcon from "@mui/icons-material/Group";

function CourseCard({ course }) {
  return (
    <>
      <div className="col-md-auto ms-1 mt-4">
        <div className="card shadow-sm" style={{ width: "18rem" }}>
          <div class="d-flex align-items-center" style={{ minHeight: "10rem" }}>
            <img src={course.logo} className="card-img-top w-50 p-3 mx-auto" alt="course logo" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {" "}
                <p className="text-muted">Mentored By {course.mentor}</p>
              </li>
              <li className="list-group-item">
                {" "}
                <GroupIcon /> {course.Members.length} {course.Members.length > 1 ? "Members" : "Member"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
