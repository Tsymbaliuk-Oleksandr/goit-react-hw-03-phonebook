import PropTypes from "prop-types";
import { Box } from "components/Box";
import { ContactItem } from "components/ContactList";

export const ContactList = ({ values, handleDelete }) => {
  return (
    <Box display="flex" flexDirection="column" p="0px" as="ul">
      {values.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={handleDelete}
          />
        );
      })}
    </Box>
  );
};

// export default ContactList;

ContactList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
