import Button from "@/components/ui/Button"
import { selectorsStatus } from "@/stores/selectorsStatus"
import { look } from "@/services/observeReadiness"
import css from "./Loading.css";

GM_addStyle(css);

export default function () {
    // To do: make it nicer
    return (
        <div class="hellofresh-md-loading">
            <div>Loading</div>
            {selectorsStatus.value.length > 0 &&
                <>
                    <ul class="selectors-status">
                        {selectorsStatus.value
                            .filter(selectorStatus => !selectorStatus.found)
                            .map(selectorStatus => (
                                <li key={selectorStatus.name}>
                                    {selectorStatus.name}: {selectorStatus.found ? "found" : "not found"}
                                </li>
                            ))}
                    </ul>
                    <Button variant="secondary" onClick={() => look()}>Check again</Button>
                </>
            }
        </div>
    );
}
