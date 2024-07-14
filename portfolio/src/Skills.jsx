function Skills(){

    const skills=["Backend Developement","FrontEnd Developement","Designing"]

    return(

        <div>
            <h1>Skills</h1>
            <ul>
                {skills.map(s=><li>{s}</li>)}
            </ul>
        </div>
    )
}
export default Skills