import { selectorsStatus } from "@/stores/selectorsStatus"
import css from "./Loading.css";

GM_addStyle(css);

export default function () {
    // To do: make it nicer
    return (
        <div class="hellofresh-md-loading">
            <div>Loading</div>
            <ul class="selectors-status">
                {selectorsStatus.value
                    .filter(selectorStatus => !selectorStatus.found)
                    .map(selectorStatus => (
                        <li key={selectorStatus.name}>
                            {selectorStatus.name}: {selectorStatus.found ? "found" : "not found"}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
