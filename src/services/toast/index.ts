import css from "./toast.css";

GM_addStyle(css);

const TOAST_FADE_DUR = 300;

const toaster = document.createElement("div");
toaster.classList.add("toaster");
const toasterContainer = document.body;
toasterContainer.appendChild(toaster);

type Props = {
  type?: "info" | "error" | "success";
  duration?: number;
};

export default function (
  message: string,
  { type = "info", duration = 5_000 }: Props = {}
) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerText = message;
  toaster.prepend(toast);

  setTimeout(() => toast.classList.add("open"), 10); // delay so transitions apply
  setTimeout(() => toast.classList.remove("open"), duration);
  setTimeout(() => toaster.removeChild(toast), duration + TOAST_FADE_DUR);
}
