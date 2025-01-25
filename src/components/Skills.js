import React from 'react'
import Skillcntr from '../Widgets/Skillcntr'

export default function Skills() {
  return (
    <>
    <div className='maincontainer'  id="skillSection">  
       <div className='scContainer'>
       <div className='titleContainer hidden'>
        <span className='tabNames'><span>03.</span>Technologies I've Work with</span>
            <div className='titleHrLine'></div>
      </div>    
       <Skillcntr skill="ReactJS" score="8" scale="80%" color="#1984c5"/>
       <Skillcntr skill="JavaScript" score="7" scale="70%" color="#ffb400"/>
       <Skillcntr skill="Node JS" score="7" scale="70%" color="#599e94"/>
       <Skillcntr skill="Mongo Db" score="6" scale="60%" color= "#d7658b"/>
       <Skillcntr skill="MySQL" score="6" scale="60%" color= "rgb(50 225 57)"/>
       <Skillcntr skill="Express js" score="7" scale="70%" color= "#e8d317"/>
       <Skillcntr skill="GitHub" score="6" scale="60%" color= "#DC143C"/>
       <Skillcntr skill="React-Native" score="8" scale="80%" color= "#DC143C"/>

       
       </div>
       </div>
    </>
  )
}
