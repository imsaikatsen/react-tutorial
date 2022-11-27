import React from "react";
export default function HoverCounter ({count, incrementCount , theme, switchTheme}){
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null; // created a object style naming
    console.log('HoverCounter rendered');
        return (
            <div>
                <h1 type="button" onMouseOver={incrementCount}  style={style}>Hovered {count} times</h1>
                <button type="button" onClick={switchTheme}>Change Theme</button>
            </div>
        )
}


