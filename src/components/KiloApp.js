import React from 'react';
import Form from './Form.js';
import Header from './Header.js';
import UnitSettings from './Unit-Settings.js';
import ModeSettings from './Mode-Settings.js';

class KiloApp extends React.Component {
    state = {
        servedNum: undefined,
        outcome: undefined,
        isUnitKilos: true,
        difficulty: 'easy'
    }
    componentDidMount = () => this.handleNumServe();

    handleUnitChange = (e) => {
        this.setState(prevState => ({
            isUnitKilos: !prevState.isUnitKilos,
        }), this.handleNumServe);
    }

    handleModeChange = (selectedMode) => {
        this.setState(() => ({
            difficulty: selectedMode
        }));
    }

    // num serve
    handleNumServePounds = () => Math.floor(Math.random() * (1000-45+1) + 45);
    handleNumServeKilos = () => Math.floor(Math.random() * (500-20+1) + 20);
    handleNumServe = () => {
        const servedNum = this.state.isUnitKilos ? this.handleNumServeKilos() : this.handleNumServePounds();
        this.setState(() => ({ servedNum }));
    }
    
    //validation
    handleNumValidation = (answerNum) => {
        if(isNaN(answerNum) || answerNum === '') {
            return `That's not a number!`;
        }
    }

    //num check
    handleNumCheckKilos = (answerNum) => Math.ceil(answerNum / 2.2) === this.state.servedNum;
    handleNumCheckPounds = (answerNum) => Math.ceil(answerNum * 2.2) === this.state.servedNum;
    handleNumCheck = (answerNum) => {
        const compare = this.state.isUnitKilos ? this.handleNumCheckKilos : this.handleNumCheckPounds;
        const outcome = compare(answerNum) ? 'Success!' : 'Nope :< Try again.';
        this.setState(() => ({ outcome }));

    }

    //next num
    handleNext = () => {
        this.handleNumServe();
        this.setState(() => ({
            outcome: undefined
        }));
    }

    render() {
        return (
            <div>
                <Header />
                <UnitSettings 
                    handleUnitChange={this.handleUnitChange}
                    isUnitKilos={this.state.isUnitKilos}
                />
                <ModeSettings
                    difficulty={this.state.difficulty}
                    handleModeChange={this.handleModeChange}
                />
                <p>{this.state.isUnitKilos ? 'Enter the kilo weight in pounds!' : 'Enter the pound weight in kilos!'}</p>
                <p>(Round down to the nearest whole number.)</p>
                <p>{this.state.servedNum} {this.state.isUnitKilos ? 'kg' : 'lb'}</p>
                <Form 
                    handleNumValidation={this.handleNumValidation}
                    handleNumCheck={this.handleNumCheck}
                    handleNext={this.handleNext}
                    outcome={this.state.outcome}
                />
            </div>
        );
    }
}

export default KiloApp;