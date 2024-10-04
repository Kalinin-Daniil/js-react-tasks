import React from 'react';

// BEGIN (write your solution here)
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            address: '',
            city: '',
            country: '',
            acceptRules: false,
            submittedData: null,
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password, address, city, country, acceptRules } = this.state;
        this.setState({
            submittedData: {
                email: email,
                password: password,
                address: address,
                city: city,
                country: country,
                acceptRules: acceptRules.toString(),
            },
        });
    };

    handleBack = () => {
        this.setState({ submittedData: null });
    };

    render() {
        const { email, password, address, city, country, acceptRules, submittedData } = this.state;

        return (
            <>
                {!submittedData ? (
                    <form name="myForm" onSubmit={this.handleSubmit}>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="col-form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="password" className="col-form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="address" className="col-form-label">Address</label>
                            <textarea
                                className="form-control"
                                name="address"
                                id="address"
                                placeholder="1234 Main St"
                                value={address}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="city" className="col-form-label">City</label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                id="city"
                                value={city}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="country" className="col-form-label">Country</label>
                            <select
                                id="country"
                                name="country"
                                className="form-control"
                                value={country}
                                onChange={this.handleChange}
                            >
                                <option value="">Choose</option>
                                <option value="argentina">Argentina</option>
                                <option value="russia">Russia</option>
                                <option value="china">China</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="rules">
                                    <input
                                        id="rules"
                                        type="checkbox"
                                        name="acceptRules"
                                        className="form-check-input"
                                        checked={acceptRules}
                                        onChange={this.handleChange}
                                    />
                                    Accept Rules
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                ) : (
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.handleBack}>Back</button>
                        <table className="table">
                            <tbody>
                                {Object.keys(submittedData)
                                    .sort()
                                    .map((key) => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{submittedData[key]}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </>
        );
    }
}

export default MyForm;
// END