

function App() {

  const handleChange = (value) => {
    if(value.length > 10 )
      alert("Max quantity of symbols must be 10!")
  }

  return (
    <>
    <form>
      <label>
        <input type='text' name="password" placeholder="password" onChange={(e) => handleChange(e.target.value)}/>
      </label>
    </form>
     
    </>
  )
}

export default App
