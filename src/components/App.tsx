import { status } from "@/stores/status";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import Ready from "@/components/Ready"
import ScrapeButton from "@/components/ScrapeButton"
import css from "./App.css";
import { Separator } from "@/components/ui/Separator";

GM_addStyle(css);

export default function () {
  return (
    <div class="hellofresh-md">
      {status.value.state === "loading" && <Loading />}
      {status.value.state === "error" && <Error />}
      {status.value.state === "ready" && <Ready />}

      {status.value.state === "loading" && <Separator />}
      {status.value.state !== "error" && (
        <ScrapeButton />
      )}
    </div>
  );
}
