import React from 'react';

const UnitSettings = (props) => (
    <div>
        <div>
            Pounds
            <label className="switch">          
                <input 
                    type="checkbox" 
                    name="kilos"
                    checked={props.isUnitKilos}
                    onChange={props.handleUnitChange}
                >
                </input>
                <span className="slider round"></span> 
            </label>
            Kilos
        </div>
    </div>
);

export default UnitSettings;