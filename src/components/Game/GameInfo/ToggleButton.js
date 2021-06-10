const ToggleButton = ({ isAsc, onToggle }) => {
    const oppOrder = isAsc ? 'descending' : 'ascending'; //aşayı stille
    return (
        <button className='pure-button toggle' onClick={onToggle}>Toggle moves order to {oppOrder}</button>
    );
}

export default ToggleButton