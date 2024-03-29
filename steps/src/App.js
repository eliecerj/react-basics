import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test] = useState({ name: "eli" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1);
    // BAD PRACTICE, use set
    //test.name = "ALbert";
  }
  return (
    <>
      {/* fragment returns pieces of code with being wraped in a parent element */}
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            <StepMessage step={step}>
              {messages[step - 1]}
              <div className="buttons">
                <Button
                  bgColor="#e7e7e7"
                  textColor="#333"
                  onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                >
                  Learn how
                </Button>
              </div>
            </StepMessage>
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>Previous</span>
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>Next</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );

  function StepMessage({ step, children }) {
    return (
      <div className="message">
        <h3>Step{step}</h3>
        {children}
      </div>
    );
  }

  function Button({ textColor, bgColor, onClick, children }) {
    return (
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}
