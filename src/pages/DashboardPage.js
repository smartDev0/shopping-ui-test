import { Grid, Typography, Drawer, Box } from "@material-ui/core";
import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import ShoppingForm from "../components/ShoppingForm";
import Button from "../stories/Button";
import Container from "../stories/Container";
import EmptyShoppingBox from "../stories/EmptyShoppingBox";
import Section from "../stories/Section";
import ShoppingItem from "../stories/ShoppingItem";
import { useSelector, useDispatch } from 'react-redux';

import Icon from "../stories/Icon";

const addShoppingAction = (payload) => {
    return { type: 'ADD_SHOPPING', payload }
}

const removeShoppingAction = (shoppings) => {
    return { type: 'REMOVE_SHOPPING', shoppings }
}

const updateShoppingAction = (shoppings) => {
    return { type: 'UPDATE_SHOPPING', shoppings }
}

const DashboardPage = () => {
    const dispatch = useDispatch();
    const [flag, setFlag] = React.useState(false);
    const [drawer, setDrawer] = React.useState(false);
    const [shoppingId, setShoppingId] = React.useState(-1);
    const [shopping, setShopping] = React.useState(null)
    const [edit, setEdit] = React.useState(false);
    const shoppings = useSelector(state => state.data);

    const onCloseDrawer = () => {
        setDrawer(false);
    }

    const onSubmit = React.useCallback(
        async event => {
            event.preventDefault();
            const { name, description, howMany } = event.target.elements;
            const item = {
                name: name.value,
                description: description.value,
                howMany: howMany.value,
                checked: edit ? event.target.elements?.purchased?.checked : false
            }
            if (edit) {
                let updateData = shoppings.map((el, index) => {
                    if (index == shoppingId) {
                        el = item;
                    }
                    return el;
                })
                dispatch(updateShoppingAction(updateData));
            } else {
                dispatch(addShoppingAction(item));
            }

            onCloseDrawer();
        },
        [edit, dispatch, shoppingId, shoppings]
    );

    const handleChange = (event, i) => {
        let updatedData = shoppings.map((item, index) => {
            if (i == index) {
                item.checked = event.target.checked
            }
            return item;
        });
        dispatch(updateShoppingAction(updatedData));
    };

    const removeShopping = () => {
        let updatedData = shoppings.filter((item, index) => index != shoppingId);
        dispatch(removeShoppingAction(updatedData));
        setFlag(false)
    }

    const onChangeEdit = (i) => {
        setEdit(true);
        setShoppingId(i);
        let data = shoppings.filter((item, index) => index == i)
        setShopping(data[0]);
        setDrawer(true)
    }

    const addItem = () => {
        setDrawer(true)
        setShopping(null);
        setEdit(false);
    }

    return (
        <Container>
            {shoppings.length == 0 && (
                <Section>
                    <Grid container justifyContent="center">
                        <EmptyShoppingBox>
                            <Grid>
                                <Box mb={2}>
                                    <Typography variant='h5' >Your shopping list is empty :(</Typography>
                                </Box>
                                <Grid container justifyContent="center">
                                    <Button size="medium" onClick={() => addItem()}>Add your first item</Button>
                                </Grid>
                            </Grid>
                        </EmptyShoppingBox>
                    </Grid>
                </Section>
            )}
            {shoppings.length > 0 && (
                <Box mt={4}>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Typography variant="h4">Your Items</Typography>
                            <Button size="medium" onClick={() => addItem()}>Add Item</Button>
                        </Grid>
                        <Box mb={2} />
                        {shoppings.map((item, i) => (
                            <Box key={i} mb={1}>
                                <ShoppingItem>
                                    <Grid container display="flex">
                                        <Checkbox
                                            color="primary"
                                            checked={item.checked}
                                            onChange={(e) => handleChange(e, i)}
                                        />
                                        <Box ml={3}>
                                            <Typography variant="h4" style={{ textDecorationLine: item.checked ? 'line-through' : 'none' }} color={item.checked ? 'primary' : 'initial'}>
                                                {item.name}
                                            </Typography>
                                            <Typography variant="h5" style={{ textDecorationLine: item.checked ? 'line-through' : 'none' }}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid container justifyContent="flex-end">
                                        <Icon onClick={
                                            () => {
                                                onChangeEdit(i)
                                            }
                                        }>
                                            <EditOutlinedIcon />
                                        </Icon>
                                        <Icon
                                            onClick={
                                                () => {
                                                    setFlag(true);
                                                    setShoppingId(i)
                                                }
                                            }
                                        >
                                            <DeleteOutlineOutlinedIcon />
                                        </Icon>
                                    </Grid>
                                </ShoppingItem>
                            </Box>
                        ))}
                    </Container>
                </Box>
            )}
            <Drawer anchor={'right'} open={drawer} onClose={onCloseDrawer}>
                <ShoppingForm onCloseDrawer={onCloseDrawer} onSubmit={onSubmit} edit={edit} shopping={shopping} />
            </Drawer>
            <Dialog
                open={flag}
                onClose={() => setFlag(false)}
            >
                <Container>
                    <DialogTitle>
                        <Box mt={2}>
                            <Typography variant="h5">
                                Delete Item?
                            </Typography>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="h6">
                            Are you sure you want to delete this item? This can not be undone.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Grid container justifyContent='flex-end'>
                            <Box mb={2}>
                                <Button size="medium" type="button" variant='outlined' onClick={() => setFlag(false)}>
                                    Cancel
                                </Button>
                                <Button size="medium" type="button" onClick={() => removeShopping()}>Delete</Button>
                            </Box>
                        </Grid>
                    </DialogActions>
                </Container>

            </Dialog>
        </Container>
    )
}

export default DashboardPage