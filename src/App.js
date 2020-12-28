import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
import {PopUp} from "./components/Popup";


function App() {
  // const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  // const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);
  const [popupShow,setpopup]=useState(false);
  
 

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */ 
  function calculateGPA() {
    // TODO
   
    let sumcredit=+0;
    let gradexcredit=+0;
    let gpax;

    for(let i=0 ; i<myCourses.length;i++){

      if(myCourses[i].grade!=="w"){

        sumcredit+=+myCourses[i].credit;
        gradexcredit+=((myCourses[i].credit)*(myCourses[i].grade));

        console.log("credit"+myCourses[i].credit);
        console.log("grade"+myCourses[i].grade);
        
      }

        

    }
    console.log("grade*credit :"+gradexcredit);
    console.log("sumcredit :"+sumcredit);
    gpax=gradexcredit/sumcredit;
    
    if(!gpax){
      return "Grade";
    }
    return gpax.toFixed(2);

  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(inputData) {

   //if(inputData){}

    setpopup(false);
    //   // TODO
    //   // recalculate GPA
    setMyCourse([...myCourses,inputData]);
    
    // 

  }


  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    
    //   // TODO
    //   // recalculate GPA
    const deletecourse= myCourses.filter((course,i)=>course.courseNO!==id);
      setMyCourse(deletecourse);
  }

  return (
    <div >
      {/* header */}
      <header className="header" >
        Grade Calculator
      </header>
      {/* content */}

      <div className="container">

      {popupShow ? <PopUp addCourse={addCourse}/>:""}
    
     {myCourses.map((course,i)=><CourseCard key={i}{...course} setMyCourse={onDeleteCourse}/>
      
     )}

      <div className="contentt">
        <div className="grade">
          <h1>{calculateGPA()}</h1>
        </div>

        <div className="Add" onClick={()=>setpopup(true)}>
          <h1>+</h1>
        </div>

      </div>

      </div>
  
  

    </div>

  );
}

export default App;
