import { AppBar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '../stories/TextField';
import Container from '../stories/Container';
import Button from '../stories/Button';
import SelectField from '../stories/Select';

const ShoppingFormContainer = styled.div`
    min-height: 100vh;
    width: 560px;
    background: #FFFFFF;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    border-bottom: 5px solid #4d81b7;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`;

export const OPTIONS = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
]
const ShoppingForm = ({ onCloseDrawer, onSubmit, edit, shopping }) => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    React.useEffect(() => {
        setChecked(shopping?.checked || false)
    }, [shopping])
    return (
        <form onSubmit={onSubmit}>
            <ShoppingFormContainer>
                <div>
                    <AppBar color="transparent" position="static">
                        <Toolbar>
                            <Box display='flex' alignItems='center' flexGrow={1}>
                                <Typography variant="h5">
                                    SHOPPING LIST
                                </Typography>
                            </Box>
                            <Box display='flex' alignItems='center'>
                                <ArrowForwardIosIcon onClick={onCloseDrawer} />
                            </Box>
                        </Toolbar>
                    </AppBar>

                    <Container>
                        <Box mt={3}>
                            <Typography variant='h5'>
                                Add an Item
                            </Typography>
                        </Box>
                        <Typography variant='h6'>
                            Add your new item below
                        </Typography>
                        <TextField
                            required
                            name='name'
                            type='text'
                            label='Item Name'
                            placeholder='Item Name'
                            display='standard'
                            inputProps={{
                                title: 'Item Name'
                            }}
                            defaultValue={shopping?.name || ''}
                        />
                        <TextField
                            required
                            name='description'
                            type='text'
                            label='Description'
                            placeholder='Description'
                            display='standard'
                            multiline
                            rows={4}
                            inputProps={{
                                title: 'Description'
                            }}
                            defaultValue={shopping?.description || ''}
                        />
                        <SelectField
                            required
                            label='How many'
                            name='howMany'
                            options={OPTIONS}
                            defaultValue={shopping?.howMany || ''}
                        />
                        {edit && <FormControlLabel
                            control={<Checkbox name="purchased" checked={checked} onChange={handleChange} />}
                            label="Purchased"
                        />}

                    </Container>
                </div>
                <Container>
                    <Grid container justifyContent='flex-end'>
                        <Box mb={3}>
                            <Button size="medium" type="button" variant='outlined' onClick={onCloseDrawer}>
                                Cancel
                            </Button>
                            <Button size="medium" type="submit">Add your first item</Button>
                        </Box>
                    </Grid>
                </Container>
            </ShoppingFormContainer>
        </form>
    )
}


export default ShoppingForm;