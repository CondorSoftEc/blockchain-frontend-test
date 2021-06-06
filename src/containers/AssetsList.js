import React, {Component} from 'react';

import AssetsTable from "../components/AssetsTable";
import {get} from "axios";

class AssetsList extends Component {

    constructor() {
        super();
        this.state = {
            rows: []
        };
    }

    componentWillMount() {
        this.getAssets()
    }


    async getAssets() {
        const response = await get('http://localhost:3000/assets',
            {
                headers: {"Access-Control-Allow-Origin": "*"}
            }
        );
        console.log(response);
        const rows = []
        if (response && response.status === 200) {
            response.data.forEach(rowIter => {
                rows.push(rowIter.Record)
            })
            console.log(rows)
            this.setState({rows: rows});
        }
    }


    render() {
        return (
            <AssetsTable rows={this.state.rows}/>
        )
    }
}

export default AssetsList;
