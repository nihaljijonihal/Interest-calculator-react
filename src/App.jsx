
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {


  const [intrest, setInterest] = useState(0)

  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [principleAmountValid, setPrincipleAmountValid] = useState(true)
  const [rateValid, setRateValid] = useState(true)
  const [yearValid, setYearValid] = useState(true)


  console.log(principle);

  const handleReset = () => {

    setRate(0);
    setPrinciple(0)
    setYear(0)


    setPrincipleAmountValid(true);
    setRateValid(true);
    setYearValid(true);
  }

  const handleValidation = (e) => {
    const { value, name } = e

    console.log(value, name)
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))

    if (!!value.match(/^\d*\.?\d+$/)) {
      if (name == 'principle') {
        setPrinciple(value);
        setPrincipleAmountValid(true);
      }
      else if (name == 'rate') {
        setRate(value);
        setRateValid(true);
      }
      else {
        setYear(value)
        setYearValid(true);
      }
    } else {
      if (name == 'principle') {
        setPrinciple(value);
        setPrincipleAmountValid(false);
      }
      else if (name == 'rate') {
        setRate(value);
        setRateValid(false);
      }
      else {
        setYear(value)
        setYearValid(false);
      }


    }


 



  }

  
  const handleCalculate = () => {

    if(principle && rate && year)
    {
      setInterest((principle*year*rate)/100)
    }else{
      alert("ENTER ALL THE FIELDS")
    }

  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>


      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>

        <h3>Simple intresr app</h3>
        <p>Calculate your simple interest Easily</p>
        <div className="d-flex flex-column justify-content-center align-items-center bg-warning p-5 rounded shadow">
          <h1 style={{ color: 'white' }}> ₹ {intrest} </h1>
          <p style={{ color: 'white' }}>Total Simple Interest</p>
        </div>



        <form className="mt-5">


          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""} onChange={(e) => handleValidation(e.target)}
              name='principle' />
          </div>
          {!principleAmountValid && <div className="text-danger mb-3 fw-bold">*Invalid Principle Amount</div>}



          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest (p.a) %" variant="outlined" value={rate || ""} onChange={(e) => handleValidation(e.target)}
              name='rate' />
          </div>
          {!rateValid && <div className="text-danger mb-3  fw-bold">*Invalid Rate Amount</div>}


          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant="outlined" value={year || ""} onChange={(e) => handleValidation(e.target)}
              name='year' />
          </div>
          {!yearValid && <div className="text-danger mb-3  fw-bold">*Invalid Year</div>}



          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained" disabled={!principleAmountValid || !rateValid || !yearValid}  >Calculate</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">Reset</Button>
          </Stack>


        </form>


      </div>

    </div>
  )
}

export default App
