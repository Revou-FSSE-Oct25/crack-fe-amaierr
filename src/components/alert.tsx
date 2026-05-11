import { Toaster } from "react-hot-toast";

export default function Alert() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          border: "2px solid #713200",
          paddingLeft: "20px",
          paddingRight: "16px",
        },
        success: {
          style: {
            border: "2px solid green",
          },
        },
        error: {
          style: { border: "2px solid red" },
        },
      }}
    />
  );
}
