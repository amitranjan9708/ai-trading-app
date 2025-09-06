import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { ArrowUpCircle, ArrowDownCircle, DollarSign, BarChart3 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function OrderPanel() {
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('150.25');
  const [orderType, setOrderType] = useState('market');
  
  const currentPrice = 150.25;
  const estimatedTotal = parseFloat(quantity || '0') * parseFloat(price || '0');

  const handlePlaceOrder = (side: 'buy' | 'sell') => {
    if (!quantity || parseFloat(quantity) <= 0) {
      toast.error('Please enter a valid quantity');
      return;
    }
    
    const orderData = {
      side,
      quantity: parseFloat(quantity),
      price: orderType === 'market' ? currentPrice : parseFloat(price),
      type: orderType,
      total: orderType === 'market' ? parseFloat(quantity) * currentPrice : estimatedTotal
    };
    
    toast.success(`${side.toUpperCase()} order placed for ${quantity} shares`, {
      description: `Order Type: ${orderType.toUpperCase()} | Total: $${orderData.total.toFixed(2)}`
    });
    
    // Reset form
    setQuantity('');
    setPrice('150.25');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Place Order
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy" className="flex items-center gap-2">
              <ArrowUpCircle className="h-4 w-4" />
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="flex items-center gap-2">
              <ArrowDownCircle className="h-4 w-4" />
              Sell
            </TabsTrigger>
          </TabsList>

          <div className="space-y-4">
            <div>
              <Label htmlFor="order-type">Order Type</Label>
              <Select value={orderType} onValueChange={setOrderType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="market">Market Order</SelectItem>
                  <SelectItem value="limit">Limit Order</SelectItem>
                  <SelectItem value="stop">Stop Order</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="text-right"
                />
              </div>
              <div>
                <Label htmlFor="price">Price {orderType === 'market' && '(Market)'}</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={orderType === 'market'}
                  className="text-right"
                />
              </div>
            </div>

            <div className="space-y-2 p-3 bg-muted rounded-lg">
              <div className="flex justify-between text-sm">
                <span>Current Price:</span>
                <span>${currentPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Estimated Total:</span>
                <span className="font-medium">
                  ${(orderType === 'market' ? parseFloat(quantity || '0') * currentPrice : estimatedTotal).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Available Balance:</span>
                <span className="text-green-600">$25,430.50</span>
              </div>
            </div>

            <TabsContent value="buy" className="mt-0">
              <Button 
                onClick={() => handlePlaceOrder('buy')} 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!quantity || parseFloat(quantity) <= 0}
              >
                Place Buy Order
              </Button>
            </TabsContent>
            
            <TabsContent value="sell" className="mt-0">
              <Button 
                onClick={() => handlePlaceOrder('sell')} 
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={!quantity || parseFloat(quantity) <= 0}
              >
                Place Sell Order
              </Button>
            </TabsContent>
          </div>
        </Tabs>

        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">AI Recommendation</h4>
            <Badge className="bg-green-100 text-green-800">Strong Buy</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            AI suggests buying 50-75 shares based on current market conditions and momentum indicators.
          </p>
          <Button variant="outline" size="sm" className="w-full">
            <BarChart3 className="h-3 w-3 mr-1" />
            Use AI Suggestion
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}