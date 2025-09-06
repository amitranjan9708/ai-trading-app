import React from 'react'
import { TradingViewChart } from '../components/TradingViewChart'
import { OrderPanel } from '../components/OrderPanel'
import styled from 'styled-components';
import { TradingHeader } from '../components/TradingHeader';
import { PortfolioSummary } from '../components/PortfolioSummary';
import { useStore } from '../components/store/store';
const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;

`;



const TradeWithCharts: React.FC = () => {
    const portfolioVisible = useStore((state) => state.isPortfolioOpen);
    return (
        <>
            <TradingHeader />
            <Div>
                
                <TradingViewChart />
                {portfolioVisible && <PortfolioSummary/>}
                {!portfolioVisible && <OrderPanel />}
            </Div>
        </>
    )
}

export default TradeWithCharts