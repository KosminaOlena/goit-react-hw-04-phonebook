import { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Label, Input, Button } from "./FormContact.styled"

const FormContact = ({createContact}) => {
const [name, setName] = useState('')
const [number, setNumber] = useState('')

    const handleChange = ({target}) => {

        switch(target.name){

            case 'name': setName(target.value);
            break;

            case 'number': setNumber(target.value);
            break;

            default: return;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createContact({
            name: name,
            number: number
        })
        setName('');
        setNumber('');

    }

        return(
            <Form onSubmit={handleSubmit}>
            <Label htmlFor="777">Name</Label>
            <Input
                type="text"
                name="name"
                placeholder="name"
                id="777"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
                value={name}
            />
            <Label htmlFor="888">Number</Label>
            <Input
                type="tel"
                name="number"
                placeholder="number"
                id="888"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
                value={number}
            />
            <Button type='submit'>Add contact</Button>
        </Form>
        )
    }

export default FormContact

FormContact.propTypes = {
    createContact: PropTypes.func.isRequired}
