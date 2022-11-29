import { Component } from "react";
import PropTypes from "prop-types";
import { Box } from "components/Box";
import { Input, Title } from "./ContactForm.styled";
import Button from "components/Button";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    checkDuplicates: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit, checkDuplicates } = this.props;
    const { name } = this.state;

    if (checkDuplicates(name)) {
      return;
    }

    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Box
        onSubmit={this.handleSubmit}
        display="flex"
        flexDirection="column"
        alignItems="center"
        as="form"
      >
        <label>
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </Box>
    );
  }
}

export default ContactForm;
