import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/auth";
import { addLead } from "../../actions/leads";

export class AdminForm extends Component {
  state = {
    name: "",
    message: "",
    complexity: 0,
  };

  static propTypes = {
    users: PropTypes.array.isRequired,
    addLead: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, message, owner, process, complexity } = this.state;
    const lead = { name, message, owner, process, complexity };
    this.props.addLead(lead);
    this.setState({
      name: "",
      message: "",
      complexity: 0,
    });
  };

  render() {
    const { name, message } = this.state;
    return (
      <>
        <div className="card card-body mt-4 mb-4">
          <h2>Add a Task</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>User</label>
              <br></br>
              <select
                name="owner"
                onChange={this.onChange}
                className="form-control"
                required
                defaultValue={""}
              >
                <option value="" disabled hidden>
                  Choose a user
                </option>
                {this.props.users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}
              />
            </div>
            <div className="">
              <label>Time Complexity</label>
              <input
                type="number"
                name="complexity"
                onChange={this.onChange}
                defaultValue={3}
              />
            </div>
            <div className="form-group">
              <label>Process</label>
              <select
                name="process"
                onChange={this.onChange}
                className="form-control"
                required
                defaultValue={""}
              >
                <option value="" disabled hidden>
                  Choose a Process
                </option>
                <option value="S">Sprint</option>
                <option value="D">Design</option>
                <option value="I">In Development</option>
                <option value="C">Continuous Integration</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { addLead, getUsers })(AdminForm);
