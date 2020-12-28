import React,{ useState }  from 'react';


export const PopUp = (props) => {

  const [inputData, setInputData] = useState({courseNO:"" ,title:"",credit:+0,grade:+0});



    return(
        <div className="popupContent">
        <div className="context_f">
          <div className="inputGrid">
            <p id="con">
              COURSE NO:
              </p>
            <input placeholder="Enter course here" id="con" onChange={(e)=>setInputData({...inputData,courseNO:e.target.value})} type="+number"></input>
            <p id="con">
              TITLE:
              </p>
              <input placeholder="Enter title here" id="con" onChange={(e)=>setInputData({...inputData,title:e.target.value})} type="text"></input>
            <p id="con">
              CREDIT:
              </p>
            <select className="term-select" id="con" onChange={(e)=>setInputData({...inputData,credit:e.target.value})} >
                    <option selected ></option> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
            </select>
            <p id="con">
              GRADE:
              </p>
      <select className="listgrade" id="con" onChange={(e)=>setInputData({...inputData,grade:e.target.value})}>
                    <option selected></option>
                    <option value="4">A</option>
                    <option value="3.5">B+</option>
                    <option value="3">B</option>
                    <option value="2.5">C+</option>
                    <option value="2">C</option>
                    <option value="1.5">D+</option>
                    <option value="1">D</option>
                    <option value="0">F</option>
                    <option value="w">W</option>

                </select>

          </div>
         
          <div className="AddCourse" onClick={()=>
            
            props.addCourse(inputData)}>
            ADD COURSE
      </div>

        </div>
      </div>
    )
}
