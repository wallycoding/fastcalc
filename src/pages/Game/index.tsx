import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    Container,
    GameView,
    Heading,
    Menu,
    CountError,
    Close,
    HeadingContent,
    Timer,
    Content,
    QuestionBox,
    Question,
    AnswerGroup,
    Answer,
} from "./styles";

type Stats = {
    timer: string;
    countError: number;
    calcNumbers: [number, number];
};

type GameProps = {
    onChangeScreen?: (screen: "start" | "game" | "end", stats: Stats) => void;
    maxCalc: [number, number];
    operation: {
        name: string;
        calc: (x: number, y: number) => number;
    };
};

const Game = (props: GameProps) => {
    const [countError, setCountError] = useState<number>(0);
    const [calcNumbers, setCalcNumbers] = useState<[number, number]>([1, 1]);
    const timerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const numberCase = (n: number) => (n < 10 ? `0${n}` : n);
        const timer = {
            hour: 0,
            minute: 0,
            second: 0,
            toString() {
                return `${numberCase(timer.hour)}:${numberCase(
                    timer.minute
                )}:${numberCase(timer.second)}`;
            },
        };
        const timerInterval = setInterval(() => {
            timer.second += 1;
            if (timer.second === 60) {
                timer.second = 0;
                timer.minute += 1;
            }
            if (timer.minute === 60) {
                timer.minute = 0;
                timer.hour += 1;
            }
            timerRef.current!!.textContent = String(timer);
        }, 1000);

        return () => {
            clearInterval(timerInterval);
        };
    }, [props]);

    const answers = useMemo(() => {
        const [x, y] = calcNumbers;
        const answers: number[] = [
            props.operation.calc(x - 1, y),
            props.operation.calc(x + 1, y + 1),
            props.operation.calc(x + 5, y + 3),
            props.operation.calc(x, y),
        ];
        return answers.sort(() => (Math.floor(Math.random() * 2) ? 1 : -1));
    }, [calcNumbers, props.operation]);

    const gameStatistics = useCallback(() => {
        const timer = timerRef.current!!.textContent;
        if (timer) {
            props.onChangeScreen &&
                props.onChangeScreen("end", {
                    timer,
                    countError,
                    calcNumbers,
                });
        }
    }, [countError, calcNumbers, props]);

    return (
        <Container>
            <GameView>
                <Heading>
                    <Menu>
                        <CountError>Erros: {countError}</CountError>
                        <Close onClick={gameStatistics}>Desistir</Close>
                    </Menu>
                    <HeadingContent>
                        <Timer ref={timerRef}>00:00:00</Timer>
                    </HeadingContent>
                </Heading>
                <Content>
                    <QuestionBox>
                        <Question>
                            {calcNumbers[0]} {props.operation.name}{" "}
                            {calcNumbers[1]}
                        </Question>
                    </QuestionBox>
                    <AnswerGroup>
                        {answers.map((value, index) => {
                            return (
                                <Answer
                                    onClick={(e) => {
                                        const [x, y] = calcNumbers;
                                        const correctCalc =
                                            props.operation.calc(x, y) ===
                                            value;
                                        if (correctCalc) {
                                            setCalcNumbers(([x, y]) => {
                                                return y < props.maxCalc[1]
                                                    ? [x, y + 1]
                                                    : [x + 1, 1];
                                            });
                                        } else {
                                            if (countError === 2) {
                                                return gameStatistics();
                                            }
                                            setCountError(
                                                (countError) => countError + 1
                                            );
                                        }
                                    }}
                                    key={index}
                                >
                                    {value}
                                </Answer>
                            );
                        })}
                    </AnswerGroup>
                </Content>
            </GameView>
        </Container>
    );
};

export default Game;
