import { useState } from 'react';

function App() {

  const [person, setPerson] = useState({fullName: '', email: '', age: ''});
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({...person, [name]: value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if(person.fullName && person.email && person.age) {
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson])
    } else {
      console.log('Fields are required');
    }

    setPerson({fullName: '', email: '', age: ''});
  }


  return (
    <>
      <div className="container">
        <form>
          <div className="form-control">
            <label>Full Name :</label>
            <input 
              type="text" 
              name="fullName" 
              id="fullName" 
              value={person.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label>Email :</label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label>Age :</label>
            <input 
              type="text" 
              name="age" 
              id="age" 
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Add People</button>
        </form>

        <div className='people-list'>
          {
            people.map((single)=>{
              const {id, fullName, email, age} = single;

              return (
                <div className='single-person' key={id}>
                  <h4>{fullName}</h4>
                  <p>{age} years</p>
                  <p>{email}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
