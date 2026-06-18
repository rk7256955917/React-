
const App = () => {
 const pageScrolling=(elem)=>{
  if(elem>0){
  console.log('page scrolling');
  }
  else{
    console.log('ulta scroll')
  }
 }
  
  return (
   <div onWheel={(elem)=>{
    pageScrolling(elem.deltaY);
   }}>
   <div className="page1"></div>
   <div className="page2"></div>
   <div className="page3"></div>
   </div>
  )
}

export default App
