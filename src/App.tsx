import {
  Bell,
  Ban,
  AlertCircle,
  CheckCheck,
  AlertTriangle,
} from "lucide-react";

import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <div style={{ margin: "2rem" }}>
        <Alert
          type={"alert-default"}
          icon={<Bell size={20} />}
          title="Upgrade your plan"
          description={
            "ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur exercitationem in nulla fugiat itaque, sunt suscipit nostrumeum sequi."
          }
        />
      </div>
      <div style={{ margin: "2rem" }}>
        <Alert
          type={"alert-info"}
          icon={<AlertCircle size={20} />}
          title="Note"
          description={
            "ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur exercitationem in nulla fugiat itaque, sunt suscipit nostrumeum sequi."
          }
        />
      </div>
      <div style={{ margin: "2rem" }}>
        <Alert
          type={"alert-success"}
          icon={<CheckCheck size={20} />}
          title="Your order has been processed"
          description={
            "ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur exercitationem in nulla fugiat itaque, sunt suscipit nostrumeum sequi."
          }
        />
      </div>
      <div style={{ margin: "2rem" }}>
        <Alert
          type={"alert-error"}
          icon={<Ban size={20} />}
          title="Something went wrong"
          description={
            "ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur exercitationem in nulla fugiat itaque, sunt suscipit nostrumeum sequi."
          }
        >
          {
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nesciunt unde debitis tempore dolorum repudiandae.
              <a href="https://www.google.com">click here</a>
              doloremque rerum distinctio, doloribus necessitatibus.
            </p>
          }
        </Alert>
      </div>
      <div style={{ margin: "2rem" }}>
        <Alert
          type={"alert-warning"}
          icon={<AlertTriangle size={20} />}
          title="Tips & Trics"
          description={
            "ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur exercitationem in nulla fugiat itaque, sunt suscipit nostrumeum sequi."
          }
        />
      </div>
    </>
  );
}

export default App;
