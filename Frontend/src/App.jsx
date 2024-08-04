

function App() {
 

  return (
    <div>
     <div className="flex flex-col justify-center items-center mt-[3%] w-[80%] mr-[5%] ml-[5%]">
      <h1 className="text-2xl font-medium text-[#444]">Expense Tracker</h1>
      <div className="flex items-center justify-between mt-5 w-[100%]">
        <div className="relative flex items-center justify-between w-[300px]">

          <button className="bg-[grey] p-[10px] border-none outline-none cursor-pointer text-[#fff] text-medium">Add Expense</button>
          <button className="bg-blue-400 p-[10px] border-none outline-none cursor-pointer text-[#fff] text-medium">Expense Report</button>
        </div>
        <div>
          <input type="text"
          placeholder="Search"
          className="p-[10px] w-[150px] border-2 border-[grey] border-solid" 
          />
        </div>
      </div>
      <div className="flex flex-col">

        <div className="relative flex justify-between items-center w-[80vw] h-[100px] bg-[#f3edeb] my-[20px] py-[10px]">
          <h2 className="m-[20px] text-[#555] text-[18px] font-medium">Snacks</h2>


          <span className="m-[20px] text-[555] text=[18px]">07/30/2024</span>
          <span className="m-[20px] text-[18px] font-medium">$ 20</span>
          <div>

          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default App
