import React from 'react';

export const GameContext = React.createContext({});

export default function GameContextProvider ({children}) {
    const [currentGameState, setGameState] = React.useState('stopped');

    return (
        <GameContext.Provider value={{
            currentGameState
        }}>
            {children}
        </GameContext.Provider>
    )
};