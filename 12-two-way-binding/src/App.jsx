import React,{useState} from 'React'
const App = () => {
const [title, setTitle] = useState('')

const submitHandler=(e)=>{
  e.preventDefault();
  console.log('form submitted by',title);
  setTitle('')
}

  return (
    <div>
    <form onSubmit={(e)=>{
    submitHandler(e)
    }}>
<input type="text" placeholder='Enter the name'
value={title} onChange={(e)=>{
  setTitle(e.target.value);
}}
/><br />
<button>Submit</button>
</form>
    </div>
  )
}

export default App
