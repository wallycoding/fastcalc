import { Container, Button } from "./styles";

type StartProps = {
    onChangeScreen?: (screen: "start" | "game" | "end") => void;
};

const Start = (props: StartProps) => {
    return (
        <Container>
            <Button
                onClick={() =>
                    props.onChangeScreen && props.onChangeScreen("game")
                }
            >
                Começar
            </Button>
        </Container>
    );
};

export default Start;
