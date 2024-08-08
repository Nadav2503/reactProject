import DataProvider from "./context/DataProvider";
import GrandParent from "./context/GrandParent";
import Countries from "./effects/Countries";
import Counter from "./memoization/Counter";

export default function SandboxPage() {
    return (
        <div>
            <GrandParent />
        </div>
    );
}