import { data } from "../data"
import LessonCard from "./LessonCard"

const Lesson = () => {
  return (
    <main>
       <LessonCard data={data}/>
    </main>
  )
}

export default Lesson