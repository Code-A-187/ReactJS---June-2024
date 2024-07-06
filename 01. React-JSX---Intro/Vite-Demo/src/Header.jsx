import SecondHeader from "./SeconHeader"; 
import MainHeader from "./MainHeader";

export default function Header () {
    return (
        <header>
            <MainHeader />
            <SecondHeader />
        </header>
    );
}