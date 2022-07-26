import "./App.css";
import CardComponent from "./components/cardComponent/CardComponent";


function App() {


  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CardComponent
              title="Open the door and go trekking"
              description="Please open the door"
              image = "https://img.freepik.com/free-photo/couple-hiking-nanos-plateau-slovenia-against-blue-sky_181624-28088.jpg?t=st=1657795253~exp=1657795853~hmac=f3e408b27f79e154917acc3a958e382541b038075e8c36a74d330ecbd393ac1a&w=1380"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CardComponent
              title="Trekking"
              description="Hello you can open the door and go trekking with your family."
              image = "https://img.freepik.com/free-photo/couple-hiking-nanos-plateau-slovenia-against-blue-sky_181624-28088.jpg?t=st=1657795253~exp=1657795853~hmac=f3e408b27f79e154917acc3a958e382541b038075e8c36a74d330ecbd393ac1a&w=1380"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CardComponent
              title="Opening the door and following the train with CJ"
              description="Do you de way? You have to know de way. You always need to know."
              image = "https://img.freepik.com/free-photo/couple-hiking-nanos-plateau-slovenia-against-blue-sky_181624-28088.jpg?t=st=1657795253~exp=1657795853~hmac=f3e408b27f79e154917acc3a958e382541b038075e8c36a74d330ecbd393ac1a&w=1380"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CardComponent
              title="The Train and the trekking through the woods"
              description="There are different lorem ipsum random texts There are different lorem ipsum"
              image = "https://img.freepik.com/free-photo/couple-hiking-nanos-plateau-slovenia-against-blue-sky_181624-28088.jpg?t=st=1657795253~exp=1657795853~hmac=f3e408b27f79e154917acc3a958e382541b038075e8c36a74d330ecbd393ac1a&w=1380"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
