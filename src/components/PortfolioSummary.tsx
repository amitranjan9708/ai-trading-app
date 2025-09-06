import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Wallet, TrendingUp, TrendingDown, PieChart, ArrowUpRight } from 'lucide-react';

const portfolioData = {
  totalValue: 45280.75,
  dayChange: 1250.30,
  dayChangePercent: 2.84,
  buyingPower: 25430.50,
  positions: [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 85, avgPrice: 148.20, currentPrice: 150.25, value: 12771.25 },
    { symbol: 'MSFT', name: 'Microsoft', shares: 42, avgPrice: 385.40, currentPrice: 392.15, value: 16470.30 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 25, avgPrice: 142.80, currentPrice: 145.60, value: 3640.00 },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 18, avgPrice: 245.75, currentPrice: 238.90, value: 4300.20 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 12, avgPrice: 680.25, currentPrice: 702.40, value: 8428.80 },
  ]
};

const totalPositionValue = portfolioData.positions.reduce((sum, pos) => sum + pos.value, 0);

export function PortfolioSummary() {
  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Portfolio Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
              <p className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Today's Change</p>
              <div className="flex items-center gap-1">
                {portfolioData.dayChange >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <p className={`font-bold ${portfolioData.dayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${Math.abs(portfolioData.dayChange).toLocaleString()} ({portfolioData.dayChangePercent}%)
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Buying Power:</span>
              <span className="font-medium">${portfolioData.buyingPower.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Position Value:</span>
              <span className="font-medium">${totalPositionValue.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Positions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            Current Positions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {portfolioData.positions.map((position) => {
              const gainLoss = position.value - (position.shares * position.avgPrice);
              const gainLossPercent = (gainLoss / (position.shares * position.avgPrice)) * 100;
              
              return (
                <div key={position.symbol} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{position.symbol}</span>
                      <Badge variant="outline" className="text-xs">
                        {position.shares} shares
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{position.name}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium">${position.value.toLocaleString()}</p>
                    <div className="flex items-center gap-1 text-sm">
                      {gainLoss >= 0 ? (
                        <ArrowUpRight className="h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                      <span className={gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}>
                        ${Math.abs(gainLoss).toFixed(2)} ({gainLossPercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}