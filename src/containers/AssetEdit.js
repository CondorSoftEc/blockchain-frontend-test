import React, {Component} from 'react';
import {Button, Container, FormControl, Grid, Input, InputLabel} from "@material-ui/core";
import {post} from "axios";
import {Redirect} from 'react-router';

class AssetsEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            Color: '',
            Size: 0,
            Owner: '',
            AppraisedValue: 0,
            redirect: false
        }
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleChangeOwner = this.handleChangeOwner.bind(this);
        this.handleChangeAppraisedValue = this.handleChangeAppraisedValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeID(event) {
        this.setState({ID: event.target.value});
    }

    handleChangeColor(event) {
        this.setState({Color: event.target.value});
    }

    handleChangeSize(event) {
        this.setState({Size: event.target.value});
    }

    handleChangeOwner(event) {
        this.setState({Owner: event.target.value});
    }

    handleChangeAppraisedValue(event) {
        this.setState({AppraisedValue: event.target.value});
    }


    async postAssets() {
        return post('http://localhost:3000/assets/new',
            {
                ID: this.state.ID,
                Color: this.state.Color,
                Size: this.state.Size,
                Owner: this.state.Owner,
                AppraisedValue: this.state.AppraisedValue,
            }
        );
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log(this.state)
        this.postAssets().then(resp => {
            console.log(resp);
            this.setState({redirect: true});
        })

        event.preventDefault();
    }

    render() {
        const {redirect} = this.state;

        if (redirect) {
            return <Redirect to='/assets'/>;
        }

        return (
            <Container maxWidth="sm">
                <h1>Nuevo asset </h1>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="id">ID</InputLabel>
                                <Input id="id" type="text" value={this.state.ID}
                                       onChange={this.handleChangeID}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="owner">Owner</InputLabel>
                                <Input id="owner" type="text" value={this.state.Owner}
                                       onChange={this.handleChangeOwner}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="color">Color</InputLabel>
                                <Input id="color" type="text" value={this.state.Color}
                                       onChange={this.handleChangeColor}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="size">Size</InputLabel>
                                <Input id="size" type="number" value={this.state.Size}
                                       onChange={this.handleChangeSize}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="appraisedvalue">AppraisedValue</InputLabel>
                                <Input id="appraisedvalue" type="text" value={this.state.AppraisedValue}
                                       onChange={this.handleChangeAppraisedValue}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">
                                Aceptar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        )
    }

}

export default AssetsEdit;
