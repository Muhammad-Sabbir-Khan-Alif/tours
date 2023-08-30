import React, { useEffect, useState } from "react";
import Title from "./components/title";
import Card from "./components/card";
import RefreshPage from "./components/refreshPage";
import LoadingPage from "./components/loadingPage";
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [newses, setNewses] = useState([])
  const url = 'https://course-api.com/react-tours-project'
  useEffect(() => {
    async function data() {
      const api = await fetch(url)
      const json = await api.json();
      setNewses(json)
      setIsLoading(false)
    }
    data();
  }, [])
  const handleDelete = (id) => {
    const updatedCards = newses.filter(card => card.id !== id);
    setNewses(updatedCards);
  };
  const handleRefresh = async () => {
    setIsLoading(true);
    try{
      const api = await fetch(url);
      const json = await api.json();
      setNewses(json);
    }catch(error){
      console.log("Your error is : " + error)
    }finally{
      setIsLoading(false);
    }
  }
  return (
    <div className="container-div">
      <div>
        <Title text="Our Tours" />
      </div>
      <div className="underline">

      </div>
      {isLoading ? <LoadingPage /> : (<div className="container m-container">
        <div className="row">
          {newses.length !== 0 ? newses.map(function (allNewses) {
            return (
              <div className="col-md-4 margin-tour" key={allNewses.id}>
                <Card id={allNewses.id} name={allNewses.name} info={allNewses.info} image={allNewses.image} price={allNewses.price} onDelete={handleDelete} />
              </div>
            )
          }) : <RefreshPage refresh={handleRefresh}/>}
        </div>
      </div>)}
    </div>
  );
}

export default App;
