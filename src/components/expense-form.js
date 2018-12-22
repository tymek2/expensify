import React from 'react'

export default class ExpenseForm extends React.Component { 
    state = {
        title: '',
        amount: '',
        error: ''
    }
    onDescriptionChange = (e) => {
        const title = e.target.value
        this.setState({title})
    }
    onAmountChange  = (e) => {
        const amount = e.target.value
        if (!amount ||amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({amount})
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        if (this.state.amount && this.state.title) {
            this.setState(()=> ({error: ''}))
            this.props.onSubmit({
                title: this.state.title,
                amount: parseFloat(this.state.amount, 10) * 100
            })
        } else {
            this.setState(()=> ({error: 'Please provide title and amount'}))
        }
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                {this.state.error && <p style={{color: 'red'}}>{this.state.error}</p>}
                <input type="text" name="title" placeholder="title" autoFocus
                    value={this.state.title}
                    onChange={this.onDescriptionChange}
                /><br/>
                <input type="text" name="amount" placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                /><br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

