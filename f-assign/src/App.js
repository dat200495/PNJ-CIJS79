import { useState } from 'react'
//
let dataList = [];
function App() {
  function addNewList() {
    let name = document.getElementById('inputName').value;
    let annout = document.getElementById('inputAnnout').value;
    let date = document.getElementById('inputDate').value;
    let newDataList = {
      name: name,
      annout: annout,
      date: date,
    }
    dataList.push(newDataList);
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };
    dataList.sort(compare);
    let text = "";
    dataList.forEach(arrange)
    document.getElementById('addNew').innerHTML = text;
    function arrange(item, index) {
      ++index
      text += `
    <tr>
    <td>${item.date}</td>
    <td>${item.name}</td>
    <td>${item.annout}</td>
    </tr>
    `
    }
  }
  const [isAdd, setIsAdd] = useState(false);
  const handelAdd = () => {
    setIsAdd(true);
    console.log("kq" + isAdd)
  };
  const handelCanCel = () => {
    setIsAdd(false);
    console.log("kq " + isAdd)
  }
  return (
    <>
      {!isAdd && (
        <div className='container'>
          <button type="button" className="btn btn-primary" onClick={handelAdd}>
            Add new Action
          </button>
        </div>
      )
      }
      {isAdd && (
        <div className='container'>
          <form>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                Annout
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAnnout"
                  placeholder="Annout"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"
                  placeholder="Date"
                />
              </div>
            </div>
            <div className='d-flex flex-row-reverse'>
              <button type="button" className="btn btn-primary ml-1 " onClick={handelCanCel}>
                Cancel
              </button>

              <button type="button" className="btn btn-primary" onClick={addNewList}>
                ADD
              </button>
            </div>
          </form>

        </div>
      )
      }
      <div className="btn-group">
  <button
    type="button"
    className="btn btn-danger dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Action
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item">Action</a>
    <a className="dropdown-item">Another action</a>
    <a className="dropdown-item">Something else here</a>
    <div className="dropdown-divider" />
    <a className="dropdown-item">Separated link</a>
  </div>
</div>

      <div className='container'>
      <table className='container' id="addNew" ></table>
      </div>
    </>
  )
};

export default App;
