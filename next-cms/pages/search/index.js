import Courses from "@/components/templates/search/Courses";
import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = ({ courses }) => {
  return <Courses courses={courses} />;
};

export async function getServerSideProps(context) {
  connectToDB();
  const { query } = context;

  const courses = await coursesModel.find({ title: { $regex: query.q } });

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
  };
}

export default index;
