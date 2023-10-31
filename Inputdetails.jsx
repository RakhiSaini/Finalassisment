import React, {useState} from 'react'

const App = () => {
    const[amountError, setAmountError] = useState('')
    const[descriptionError, setDescriptionError] = useState('')

    // Amount validation
    const validateAmount = (e) =>{
        var amount = e.target.value

        if (validator.is.Amount(amount)){
            setAmountError('valid amount : ')
        }else{
            setAmountError('enter a valid amount')
        }
        console.log(validator.isAmount())       
    }

    // for description validation
    const validateDescription = (e) =>{
        setDescription(e.target.value);

        if (validator.is.Amount(amount)){
            setDescriptionError('')
        }else{
            setDescriptionError('not left empty')
        }
        console.log(validator.isDescription())
    }
}

function Inputdetails() {
  return (
    <>
    
    <div className="Inputform">
      <div className="Inputform1">
  <label htmlFor="exampleFormControlInput1" className="form-label">Amount</label><br></br>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="amount"/>
</div>
<br></br>
<div className="Inputform2">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label><br></br>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="description"></textarea>
</div>
<br></br>
    <button type= 'submit' className='button' onClick="submit">Submit</button>
</div>
    </>
  )
}

export default Inputdetails;

