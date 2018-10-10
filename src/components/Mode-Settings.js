import React from 'react';

class ModeSettings extends React.Component {
    handleModeChange = (e) => {
        const selectedMode = e.target.name;
        this.props.handleModeChange(selectedMode);
        
    }

    render() {
        return (
            <div>
                <label>
                    Easy
                    <input
                        type="checkbox"
                        name="easy"
                        checked={this.props.difficulty === 'easy'}
                        onChange={this.handleModeChange}
                    >
                    </input>
                </label>
                <label>
                    Medium
                    <input
                        type="checkbox"
                        name="medium"
                        checked={this.props.difficulty === 'medium'}
                        onChange={this.handleModeChange}
                    >
                    </input>
                </label>
                <label>
                    Hard
                    <input
                        type="checkbox"
                        name="hard"
                        checked={this.props.difficulty === 'hard'}
                        onChange={this.handleModeChange}
                    >
                    </input>
                </label>
            </div>
        );
    }
}

export default ModeSettings;