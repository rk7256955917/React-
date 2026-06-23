
const App = ()=> {
// const user={
//     username:'rohit',
//     age:18,
//     city:'delhi'
// }
// localStorage.setItem('user',JSON.stringify(user));
 const user=JSON.parse(localStorage.getItem('user'))
 console.log(user);
  return (
    <div>
      App
    </div>
  )
}
export default App
