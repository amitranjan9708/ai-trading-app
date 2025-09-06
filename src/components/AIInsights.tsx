import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Brain, TrendingUp, AlertTriangle, Target, Zap } from 'lucide-react';

const aiInsights = [
  {
    id: 1,
    type: 'bullish',
    confidence: 85,
    title: 'Strong Momentum Detected',
    description: 'Technical indicators suggest continued upward movement with RSI at 58 and MACD showing positive divergence.',
    action: 'Consider buying on dips',
    timeframe: '1-3 days',
    icon: TrendingUp,
  },
  {
    id: 2,
    type: 'neutral',
    confidence: 72,
    title: 'Resistance Level Approaching',
    description: 'Stock is approaching key resistance at $155. Watch for potential breakout or reversal.',
    action: 'Monitor closely',
    timeframe: 'Next 4-6 hours',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'bullish',
    confidence: 91,
    title: 'Volume Surge Alert',
    description: 'Unusual volume spike detected (3x average) with positive price action. Institutional buying likely.',
    action: 'Strong buy signal',
    timeframe: 'Immediate',
    icon: Zap,
  },
];

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 80) return 'bg-green-500';
  if (confidence >= 60) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'bullish': return 'bg-green-100 text-green-800 border-green-200';
    case 'bearish': return 'bg-red-100 text-red-800 border-red-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-500" />
          AI Trading Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {aiInsights.map((insight) => {
          const IconComponent = insight.icon;
          return (
            <div key={insight.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  <h4 className="font-medium">{insight.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getTypeColor(insight.type)}>
                    {insight.type}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <div className={`h-2 w-2 rounded-full ${getConfidenceColor(insight.confidence)}`} />
                    <span className="text-sm text-muted-foreground">{insight.confidence}%</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{insight.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm">
                    <span className="text-muted-foreground">Action:</span>{' '}
                    <span className="font-medium">{insight.action}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {insight.timeframe}
                  </span>
                </div>
                <Button size="sm" variant="outline">
                  <Target className="h-3 w-3 mr-1" />
                  Execute
                </Button>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">AI Confidence Score</span>
            <span className="font-medium text-green-600">High (83%)</span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '83%' }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}