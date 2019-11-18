import React from "react";
import "./Home.css";

interface HomeState {
  error: string;
  loading: boolean;
  result: string;
  value: string;
}

class Home extends React.Component<{}, {}> {
  public readonly state: Readonly<HomeState> = {
    error: "",
    loading: false,
    result: "",
    value: ""
  };

  private handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  private submitInput = async e => {
    try {
      const value = this.state.value;
      this.setState({ value: "", loading: true });
      const response = await fetch(`http://localhost:80?url=${value}`);
      if (response) {
        const result = await response.json();
        this.setState({
          error: "",
          result: JSON.stringify(result)
            .split(",")
            .join("\n"),
          loading: false
        });
      } else {
        this.setState({ error: "Internal Error", result: "", loading: false });
      }
    } catch {
      this.setState({ error: "Network error", result: "", loading: false });
    }
  };

  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img
            src={require("./compass.png")}
            className="Home-logo"
            alt="logo"
          />
          <h2>Politicate</h2>
        </div>

        <div className="Home-flex-container">
          {this.state.result.length > 0 && (
            <div className="Home-response">{this.state.result}</div>
          )}
        </div>

        {this.state.error.length > 0 && (
          <div className="Home-error">{this.state.error}</div>
        )}

        <div className="Home-flex-container">
          {!this.state.loading ? (
            <input
              className="Home-input"
              type="text"
              value={this.state.value}
              onChange={this.handleInputChange}
              placeholder="https://example.com"
            />
          ) : (
            <div>loading...</div>
          )}
          <button className="Home-input-button" onClick={this.submitInput}>
            Go!
          </button>
        </div>

        <div className="Home-header" />
      </div>
    );
  }
}

export default Home;
