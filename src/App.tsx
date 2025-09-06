import { TradingHeader } from './components/TradingHeader';
import { TradingChart } from './components/TradingChart';
import { AIInsights } from './components/AIInsights';
import { OrderPanel } from './components/OrderPanel';
import { PortfolioSummary } from './components/PortfolioSummary';
import { MarketData } from './components/MarketData';
import { Toaster } from './components/ui/sonner';
import { TradingViewChart } from './components/TradingViewChart';
export default function App() {
  return (
    <>
    <div className="min-h-screen bg-background">
      <TradingHeader />
      
      <main className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Trading Chart - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <TradingChart />
          </div>
          
          {/* Right Sidebar - Order Panel */}
          <div className="lg:col-span-1">
            <OrderPanel />
          </div>
          
          {/* Far Right Sidebar - Market Data */}
          <div className="lg:col-span-1">
            <MarketData />
          </div>
          
          {/* Second Row */}
          <div className="lg:col-span-2">
            <AIInsights />
          </div>
          
          <div className="lg:col-span-2">
            <PortfolioSummary />
          </div>

          
        </div>
      </main>
      
      <Toaster />
    </div>
    <div>
            <TradingViewChart/>
          </div>
    </>
  );
}