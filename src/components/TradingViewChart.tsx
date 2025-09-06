import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [symbol, setSymbol] = useState("SPY"); // Default: Nifty 50

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // clear previous chart

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        new window.TradingView.widget({
          autosize: true,
          symbol: symbol, // use current symbol
          interval: "5",
          timezone: "Asia/Kolkata",
          theme: "light",
          style: "1",
          locale: "en",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          container_id: "tradingview_chart",
        });
      };
      containerRef.current.appendChild(script);
    }
  }, [symbol]); // reload chart when symbol changes

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <CardTitle>Live Market Chart</CardTitle>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <Button variant={symbol === "SPY" ? "default" : "outline"} size="sm" onClick={() => setSymbol("SPY")}>
            SPX
          </Button>
          <Button variant={symbol === "NASDAQ:NDX" ? "default" : "outline"} size="sm" onClick={() => setSymbol("NASDAQ:NDX")}>
            Nasdaq 100
          </Button>
          <Button variant={symbol === "BINANCE:BTCUSDT" ? "default" : "outline"} size="sm" onClick={() => setSymbol("BINANCE:BTCUSDT")}>
            Bitcoin
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          id="tradingview_chart"
          ref={containerRef}
          style={{ height: "500px", width: "100%" }}
        />
      </CardContent>
    </Card>
  );
}
