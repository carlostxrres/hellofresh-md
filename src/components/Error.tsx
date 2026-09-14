import { status } from "@/stores/status";

export default function() {
    // To do: make it nicer
    return (
        <div class="hellofresh-md-error">
            <div>Error</div>
            <div>{status.value.message || "Error occurred"}</div>
        </div>
    );
}
