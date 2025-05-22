import Calculator from "./components/calculator";

const App = () => {
  const hok = [10,2,3,4,5]
  let  gif = hok.reduce((i,j)=>{
    return i = i-j;
  },hok[0])
      console.log(gif)
  return (
    <div>
      
      <Calculator>

      </Calculator>
    </div>
  )
}

export default App