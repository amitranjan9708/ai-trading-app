import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Bell, Settings, LogOut, Brain, Zap } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { useStore } from './store/store';


export function TradingHeader() {
  const openPortfolio = useStore((state) => state.togglePortfolio);
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
              <Brain className="h-4 w-4" />
            </div>
            <h1 className="font-bold text-xl">TradeAI Pro</h1>
            <Badge className="bg-green-100 text-green-800 ml-2">
              <Zap className="h-3 w-3 mr-1" />
              Live
            </Badge>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="font-medium text-foreground">Dashboard</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" onClick={openPortfolio} >Portfolio</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Watchlist</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Research</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <div className="text-right">
              <p className="text-muted-foreground">Market Status</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-medium text-green-600">Open</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">Portfolio</p>
              <p className="font-medium">$45,280.75</p>
            </div>
          </div>

          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
              3
            </div>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}