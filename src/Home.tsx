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
        this.setState({ result: JSON.stringify(response), error: "", loading: false });
      } else {
        this.setState({ result: "", error: "Internal Error", loading: false });
      }
    } catch {
      this.setState({ result: "", error: "Network error", loading: false });
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

        {this.state.result.length > 0 && <div>{this.state.result}</div>}

        {this.state.error.length > 0 && (
          <div className="Home-error">{this.state.error}</div>
        )}

        <div className="Home-input-container">
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
            Go
          </button>
        </div>

        <div className="Home-header" />
      </div>
    );
  }
}

export default Home;
