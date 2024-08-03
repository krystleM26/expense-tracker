

function App() {
 

  return (
    <div>
     <div className="flex flex-col justify-center items-center mt-[3%] w-[80%] mr-[5%] ml-[5%]">
      <h1 className="text-2xl font-medium text-[#444]">Expense Tracker</h1>
      <div className="flex items-center justify-between mt-5 w-[100%]">
        <div className="relative flex items-center justify-between w-[300px]">

          <button className="bg-[green]">Add Expense</button>
          <button>Expense Report</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default App
