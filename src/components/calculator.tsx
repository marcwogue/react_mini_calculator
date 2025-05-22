import type { ReactNode, MouseEventHandler } from 'react';


import {  useState } from 'react';

interface AddProps {
  onclick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
}

function Add(props:AddProps) {

  return(
    <button onClick={props.onclick} className={props.className}>
        {props.children}
    </button>
  )
}

interface histo{
  id : string,
  value : number
}

const calculator = () => {
  const [val1,setval1]= useState(0)
  const [val2,setval2]= useState(0)
  const [show,setshow] = useState(false)
  const [val3,setval3]= useState(0)
  const [hist, sethist] = useState<histo[]>([])
  const [histid,sethistid] = useState(Date.now)


  const uphist = ()=>{
    if (val3 != 0) {
      const newhist : histo = {
        id : histid,
        value : val3
      }
      sethist([...hist,newhist])
    }
    console.log(hist);
    sethistid(Date.now)
    
  }
 
  const add = ()=>{
    setval3(val1+val2)
    uphist();
  }
  const res = ()=>{
    setval1(0)
    setval2(0)
    setval3(0)
  }
  const sous = ()=>{
    setval3(val1-val2)
    uphist();
  }
  const mult = ()=>{
    setval3(val1*val2)
    uphist();
  }
  const div = ()=>{
    setval3(val1/val2)
    uphist();
  }
const handler1 = (e : React.ChangeEvent<HTMLInputElement>) =>{
  setval1(Number(e.target.value))
}

const handler2 = (e :React.ChangeEvent<HTMLInputElement>) =>{
  setval2(Number(e.target.value))
}
console.log('render')
   
  return (
<div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded-2xl space-y-6">
  <h1 className="text-3xl font-bold text-center text-blue-700">The Calculator</h1>
  <h2 className="text-lg text-center text-gray-600">Welcome to the Meta calculator</h2>

  <div className="space-y-4">
    <input 
      type="number" 
      placeholder="Enter a number" 
      value={val1 === 0 ? '' : val1} 
      onChange={handler1}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <input 
      type="number" 
      placeholder="Enter a number" 
      value={val2 === 0 ? '' : val2} 
      onChange={handler2}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
    <Add onclick={add} className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-center">Add</Add>
    <Add onclick={sous} className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg text-center">Subtract</Add>
    <Add onclick={mult} className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-center">Multiply</Add>
    <Add onclick={div} className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-center">Divide</Add>
    <Add onclick={res} className="bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg text-center col-span-2">Reset</Add>
  </div>

  <div className="text-center text-lg font-medium text-gray-800 mt-4">
    {val3 === 0 ? "Veuillez patienter\n Current : 0" : val3}
  </div>

  <div className="text-center">
    <Add onclick={() => setshow(!show)} className="mt-4 text-sm text-blue-600 hover:underline cursor-pointer">
      {!show ? 'Show history...' : 'Hide history...'}
    </Add>
  </div>

  <div className="mt-4">
    {show ? (
      <ol className="list-decimal space-y-2 pl-5">
        {hist.map((key) => (
          <li key={key.id} className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
            <code className="text-gray-800 font-semibold">{key.value}</code>
            <button 
              onClick={() => sethist(hist.filter(a => a.id !== key.id))} 
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    ) : (
      <p className="text-center text-gray-500 italic">Nothing here yet</p>
    )}
  </div>
</div>

  )
}

export default calculator