import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
class Autocomplete extends React.Component {
    state = {
        query: '',
        countries: [],
    };

    handleChange = async (event) => {
        const query = event.target.value;

        this.setState({ query });

        if (query.length > 0) {
            try {
                const res = await axios.get('/countries', { params: { term: query } });
                this.setState({ countries: res.data });
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        } else {
            this.setState({ countries: [] });
        }
    };

    render() {
        const { query, countries } = this.state;

        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Country"
                        value={query}
                        onChange={this.handleChange}
                    />
                </form>
                {query && countries.length > 0 && (
                    <ul>
                        {countries.map((country) => (
                            <li key={country}>{country}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default Autocomplete;
// END
