const Header = (kurssi) => {
  return (
    <div>
      <h1>{kurssi.course}</h1>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ kontentti }) => {
  return (
    <div>
      {kontentti.map((part) => (
        <Part key={part.name} name={part.name} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content kontentti={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
