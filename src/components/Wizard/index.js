import React, { Children, useState } from "react";

export const Wizard = ({ children }) => {
  const steps = Children.toArray(children);
  const [active, setActive] = useState(0);

  const currentStep = steps[active];

  const onBack = () => {
    setActive((index) => index - 1);
  };

  const onNext = () => {
    setActive((index) => index + 1);
  };

  return (
    <div className="wizard my-20 space-y-8 max-w-screen-md mx-auto">
      <ul className="w-full steps">
        <li className={`step ${active > -1 ? "step-primary" : ""}`}>Step 1</li>
        <li className={`step ${active > 0 ? "step-primary" : ""}`}>Step 2</li>
        <li className={`step ${active > 1 ? "step-primary" : ""}`}>Step 3</li>
      </ul>
      <div className="wizard__steps">{currentStep}</div>
      <div className="wizard__actions space-x-2 flex justify-center">
        {active > 0 ? (
          <button type="button" className="btn btn-sm" onClick={onBack}>
            Atras
          </button>
        ) : null}
        {active < steps.length - 1 ? (
          <button type="button" className="btn btn-sm" onClick={onNext}>
            Siguiente
          </button>
        ) : null}
      </div>
    </div>
  );
};
