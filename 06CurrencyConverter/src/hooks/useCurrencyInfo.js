import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.4.26/v1/currencies/${currency}.json`
    );
  });
}
