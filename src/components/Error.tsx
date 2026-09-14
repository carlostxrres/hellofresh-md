import { status } from "@/stores/status";

export default function() {
    // To do: make it nicer
    return (
        <div>
            <div>Error</div>
            <div>{status.value.message || "Error occurred"}</div>
        </div>
    );
}
