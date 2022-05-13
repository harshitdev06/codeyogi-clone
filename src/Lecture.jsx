import React, {  } from "react";
import LectureCard from "./LectureCard";
import Loader from "./Loader";
import { getLectureList, toDecachedData } from "./Api";

function Lecture() {
  const cachedLectureList = toDecachedData("lectureList") || [];
  const [spinner, setSpinner] = React.useState(true);
  const [lecture, setLecture] = React.useState(cachedLectureList);

  React.useEffect(() => {
    const promise = getLectureList();
    promise.then((lectureList) => {
      setLecture(lectureList);
      setSpinner(false);
    });
  }, []);

  return (
    <>
      <div className="pt-3 sm:pt-10">
        {spinner && <Loader />}
        <h1 className="mb-5 text-xl font-semibold">Lecture list </h1>
      </div>
      <div
        className={
          "  px-4 py-4 mt-2 bg-gray-50 flex justify-center items-center "
        }>
        <div className="w-full max-w-4xl space-y-8">
          <ul className="space-y-2">
            {lecture.map((t) => {
              return <LectureCard lecture={t} key={t.id} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Lecture;
