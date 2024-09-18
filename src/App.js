import React, { useState } from "react";

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: "center" }} className="text-white">
      Login oldunuz.
    </div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
  const [combo, setCombo] = useState([]);

  function handleCombination(number) {
    // Destroyer of Minds
    if (combo.length === 3) {
      const tempCombo = [...combo, number];
      if (tempCombo.join("") === combination.join("")) {
        setCombo(tempCombo);
      } else {
        if (typeof window !== "undefined") {
          window.alert("Yanlış kombinasyon");
        }
        setCombo([]);
      }
    } else {
      setCombo((prev) => [...prev, number]);
    }
  }

  return (
    <main>
      {combo && combo.join("") === combination.join("") ? (
        <NextScreen />
      ) : (
        <section className="border-[1px] border-black p-8 bg-zinc-700 shadow-[0_0_4px_rgb(255,255,255,0.3)_inset] rounded-xl">
          <div className="min-h-[60px] pt-1 w-[275px] text-center text-5xl outline outline-[2px] outline-black bg-slate-100 shadow-[0_0_7px_rgb(255,255,0,0.3)_inset] mb-4">
            {combo}
          </div>
          <div className="grid grid-cols-3 gap-[2px] min-w-[275px] max-w-[275px] text-center text-5xl">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <div
                key={number}
                className={`py-6 outline outline-[2px] outline-black cursor-pointer bg-white hover:bg-zinc-100 shadow-[0_0_12px_rgb(0,0,0,0.3)_inset,0_0_7px_rgb(0,0,0)] active:bg-zinc-400 ${
                  number === 0 ? "col-start-2" : ""
                }`}
                onClick={() => handleCombination(number)}
              >
                {number}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
