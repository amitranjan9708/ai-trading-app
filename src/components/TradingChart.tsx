import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { TrendingUp, TrendingDown } from 'lucide-react';

// Mock trading data
const generateTradingData = () => {
  const data = [];
  let price = 150.25;
  const now = new Date();
  
  for (let i = 100; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 5 * 60 * 1000); // 5-minute intervals
    price += (Math.random() - 0.5) * 4;
    price = Math.max(140, Math.min(160, price)); // Keep price in range
    
    data.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      price: parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 1000000) + 500000,
    });
  }
  return data;
};

const tradingData = generateTradingData();
const currentPrice = tradingData[tradingData.length - 1].price;
const previousPrice = tradingData[tradingData.length - 2].price;
const priceChange = currentPrice - previousPrice;
const percentChange = (priceChange / previousPrice * 100).toFixed(2);

export function TradingChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            AAPL - Apple Inc.
            {priceChange >= 0 ? (
              <TrendingUp className="h-5 w-5 text-green-500" />
            ) : (
              <TrendingDown className="h-5 w-5 text-red-500" />
            )}
          </CardTitle>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold">${currentPrice}</span>
            <span className={`${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {priceChange >= 0 ? '+' : ''}${priceChange.toFixed(2)} ({percentChange}%)
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="5m">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1m</SelectItem>
              <SelectItem value="5m">5m</SelectItem>
              <SelectItem value="1h">1h</SelectItem>
              <SelectItem value="1d">1d</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">Indicators</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={tradingData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                className="text-xs"
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                className="text-xs"
                domain={['dataMin - 1', 'dataMax + 1']}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
                labelFormatter={(label) => `Time: ${label}`}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}