const App = () => {
  const Header = (props) => {
    return <>
      <h1>{props.course}</h1>
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
    const partsList = props.partsList
    const renderResult = partsList.map(
      (part) =>{
        return <Part key={part.name} part={part.name} exercises={part.exercises} />
      }
    )
    console.log("renderResult", renderResult)
    return renderResult
  }

  const Total = (partsList) => {
    return <> Hello World</>
  }

  const course = 'Half Stack application development'
  const partsList = [
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


  return (
    <>
      <Header course={course} />
      <Content partsList={partsList}/>
      <Total totalExercises={partsList} />
    </>
  )
}

export default App