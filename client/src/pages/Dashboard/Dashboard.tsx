import Header from "@widgets/Header/Header";
import WidgetContainer from "@shared/WidgetContainer/WidgetContainer";
import Input from "@shared/Input/Input";

export default function Dashboard() {
    return (
        <>
            <Input value={"Insert some text"} styleType={"Input1"} />
            <Header />
            <WidgetContainer>
                <p>123</p>
            </WidgetContainer>
        </>
    );
}
