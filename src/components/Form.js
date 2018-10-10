import React from 'react';

class Form extends React.Component {
    state = {
        error: undefined
    }
    handleNumAnswer = (e) => {
        e.preventDefault();
        const answerNum = e.target.elements.answerNum.value.trim();
        const error = this.props.handleNumValidation(answerNum);
        this.setState(() => ({ error }));
        if(!error) {
            this.props.handleNumCheck(answerNum);
            e.target.elements.answerNum.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleNumAnswer}>
                    <input type="text" name="answerNum"></input>
                    <button>Submit</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
                {this.props.outcome && 
                    <div>
                        <p>{this.props.outcome}</p>
                        <button onClick={this.props.handleNext}>Next</button>
                    </div>
                }
            </div>
        );
    }
}

export default Form;