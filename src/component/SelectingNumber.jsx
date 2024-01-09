import { useState } from "react"

function SelectingNumber(){
    let arr=[1,2,3,4,5,6,7,8,9]
    let [givenArr, setgivenArr]= useState(arr)
    let [firstOption, setfirstOption]=useState([])
    let [secondOption, setsecondOption]=useState([])
    let [thirdOption, setthirdOption]=useState()
    let [fourthOption, setfourthOptionn]=useState()
    function firstoption(e){
        console.log(e.target.value );
        let x=e.target.value       
        setfirstOption([...firstOption,x])
    } 
    function secondoption(e){
        let x=e.target.value       
        setsecondOption([...secondOption,x])
    }
return(
    <>  
    <div style={{height:"20px",width:"10%", border:"2px solid red"}}>
        {firstOption}
    </div>
    <div style={{height:"20px",width:"10%", border:"2px solid red"}}>
    {secondOption}
    </div>
    <div>
        <select name="" id="" onChange={(e)=>{
            firstoption(e)
        }}>
            {givenArr.map((items,i)=>{
                return(<>
                   <option value={items} key={i}>{items} </option>
                </>)
            })}
        </select>

        <select name="" id="" onChange={(e)=>{
            secondoption(e)
        }}>
            {givenArr.map((items,i)=>{
                return(<>
                   <option value={items} key={i}>{items} </option>
                </>)
            })}
        </select>
    </div>
    </>
)
}
export default SelectingNumber