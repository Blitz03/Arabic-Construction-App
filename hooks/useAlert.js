"use client";

import { useState } from "react";

export default function useAlert() {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    variant: "default",
  });

  function showAlert(newAlert) {
    setAlert(newAlert);
  }

  function hideAlert() {
    setAlert({
      show: false,
      text: "",
      variant: "default",
    });
  }

  return { alert, showAlert, hideAlert };
}
