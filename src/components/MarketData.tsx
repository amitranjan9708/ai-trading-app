import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { TrendingUp, TrendingDown, Activity, Star, Plus } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const marketData = [
  { symbol: 'SPY', name: 'SPDR S&P 500', price: 442.15, change: 5.32, changePercent: 1.22 },
  { symbol: 'QQQ', name: 'Invesco QQQ Trust', price: 378.92, change: -2.45, changePercent: -0.64 },
  { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.18, changePercent: 1.47 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 392.15, change: 6.75, changePercent: 1.75 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 145.60, change: 2.80, changePercent: 1.96 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 142.30, change: -1.25, changePercent: -0.87 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 238.90, change: -6.85, changePercent: -2.79 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 702.40, change: 22.15, changePercent: 3.26 },
  { symbol: 'META', name: 'Meta Platforms', price: 485.20, change: 8.45, changePercent: 1.77 },
  { symbol: 'AMD', name: 'Advanced Micro Devices', price: 164.75, change: -3.20, changePercent: -1.91 },
];

const aiPicks = [
  { symbol: 'NVDA', confidence: 92, reason: 'Strong AI demand growth' },
  { symbol: 'MSFT', confidence: 88, reason: 'Cloud revenue acceleration' },
  { symbol: 'AAPL', confidence: 85, reason: 'iPhone upgrade cycle momentum' },
];

export function MarketData() {
  return (
    <div className="space-y-6">
      {/* AI Top Picks */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            AI Top Picks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {aiPicks.map((pick, index) => (
              <div key={pick.symbol} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{pick.symbol}</p>
                    <p className="text-sm text-muted-foreground">{pick.reason}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800 mb-1">
                    {pick.confidence}% Confidence
                  </Badge>
                  <div>
                    <Button size="sm" variant="outline">
                      <Plus className="h-3 w-3 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Market Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-2">
              {marketData.map((stock) => (
                <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{stock.symbol}</span>
                      {stock.changePercent >= 2 ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : stock.changePercent <= -2 ? (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      ) : null}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{stock.name}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium">${stock.price}</p>
                    <p className={`text-xs ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}