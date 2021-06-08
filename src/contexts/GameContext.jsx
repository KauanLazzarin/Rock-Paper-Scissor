import React from 'react';
import PaperButton from '../components/options/paper/Paper';
import RockButton from '../components/options/rock/Rock';
import ScissorButton from '../components/options/scissor/Scissor';

export const GameContext = React.createContext({});

export default function GameContextProvider ({children}) {
    const [currentGameState, setGameState] = React.useState('stopped');
    const [playerMove, setPlayerMove] = React.useState(null);
    const [playerMoveComponent, setPlayerMoveComponent] = React.useState(null);

    React.useEffect(() => {
        if (playerMove === 'paper') {
            console.log('opar')
            setPlayerMoveComponent(PaperButton);
        } else {
            setPlayerMoveComponent(null)
        }
    }, [playerMove]);

    return (
        <GameContext.Provider value={{
            currentGameState,
            playerMove,
            playerMoveComponent,
            setPlayerMoveComponent,
            setPlayerMove
        }}>
            {children}
        </GameContext.Provider>
    )
};