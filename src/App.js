import "./styles.css";

import { Wizard } from "./components/Wizard";
import { Step } from "./components/Step";

export default function App() {
  return (
    <div className="App">
      <Wizard>
        <Step step={1}>
          <div className="card shadow-xl image-full">
            <figure>
              <img alt="step-1" src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="justify-end card-body">
              <h2 className="card-title">Image overlay</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
            </div>
          </div>
        </Step>
        <Step step={2}>
          <div className="card shadow-xl image-full">
            <figure>
              <img alt="step-2" src="https://picsum.photos/id/1011/400/250" />
            </figure>
            <div className="justify-end card-body">
              <h2 className="card-title">Image overlay</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
            </div>
          </div>
        </Step>
        <Step step={3}>
          <div className="card shadow-xl image-full">
            <figure>
              <img alt="step-3" src="https://picsum.photos/id/1021/400/250" />
            </figure>
            <div className="justify-end card-body">
              <h2 className="card-title">Image overlay</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
            </div>
          </div>
        </Step>
      </Wizard>
    </div>
  );
}
