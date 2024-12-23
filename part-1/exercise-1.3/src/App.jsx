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
    return <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  }

  const Total = (props) => {
    return <>
      <p>
        Number of exercises {props.totalExercises}
      </p>
    </>
  }

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises={part3.exercises} />
      <Total totalExercises={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App