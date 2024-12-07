const App = () => {
  const Header = (props) => {
    const courseName = props.course.name
    return <>
      <h1>{courseName}</h1>
    </>
  }
  
  const Part = (props) => {
    return <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  }

  const Content = (props) => {
    const partsList = props.course.parts
    const renderResult = partsList.map(
      (part) =>{
        return <Part key={part.name} part={part.name} exercises={part.exercises} />
      }
    )
    console.log("renderResult", renderResult)
    return renderResult
  }

  const Total = (props) => {
    const course = props.course
    const totalExercises = course.parts.reduce(
      (acc, part) => {
        return acc + part.exercises
      }, 0
    )
    console.log("totalExercises", totalExercises)
    return <> 
      <p>
        Number of exercises {totalExercises}
      </p>
    </>
  }
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </>
  )
}

export default App