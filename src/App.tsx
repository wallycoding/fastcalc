import React, { useState, useMemo } from "react";
import { GlobalStyles, Wrapper } from "./styles";
import Start from "./pages/Start";
import Game from "./pages/Game";

type Stats = {
  timer: string;
  countError: number;
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<"start" | "game" | "end">(
    "start"
  );

  const [{ component: Component }] = useMemo(() => {
    const changeScreen = (screen: "start" | "game" | "end", stats?: Stats) => {
      setCurrentScreen(screen);
      console.log(stats);
    };
    const screens = [
      {
        name: "start",
        component: () => <Start onChangeScreen={changeScreen} />,
      },
      {
        name: "game",
        component: () => (
          <Game
            maxCalc={[9, 10]}
            operation={{
              name: "x",
              calc(x, y) {
                return x * y;
              },
            }}
            onChangeScreen={changeScreen}
          />
        ),
      },
      {
        name: "end",
        component: () => <h1>OLA 2</h1>,
      },
    ];
    return screens.filter((screen) => {
      return screen.name === currentScreen;
    });
  }, [currentScreen]);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Component />
      </Wrapper>
    </>
  );
};

export default App;
