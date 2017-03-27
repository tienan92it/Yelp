/**
 * Created by AnTran on 3/25/17.
 */
import React, { Component } from 'react';
import {
    ListView, View, ActivityIndicator, StatusBar
} from 'react-native';

import {connect} from 'react-redux';
import {actionCreators} from "../../reducers/reducer";

import styles from './styles'
import RestaurantItem from "../../components/restaurantItem/RestaurantItem"
import SearchBar from "../../components/searchbar/SearchBar"
import Setting from "../setting/Setting"

class Home extends Component {

    constructor(props) {
        super(props);
        this.setSearchText = this.setSearchText.bind(this)
        this.onFilterClick = this.onFilterClick.bind(this)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            rawData: [],
            searchText: '',
            token: '',
            animating: false,
            distanceFilter: (this.props.dataFilter) ? this.props.dataFilter.distanceFilter : 0
        };
    }

    componentDidMount() {
        this.fetchToken().then((json) => {
            this.setState({
                token: json
            })
            this.getRestaurants(json)
        })
    }

    fetchToken = () => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows([]),
            rawData: [],
            animating: true
        })
        const params = {
            client_id: 'qDPlyf_EBtljgqKxPALx6Q', // use your own
            client_secret: 'RlFVBx8XonMjZcNnal3e827ooycXR7Pc4JngdpbM6UmdbW61GEfiss22OMRK0p4M', // use your own
            grant_type: 'client_credentials'

        }

        const request = new Request('https://api.yelp.com/oauth2/token', {
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            }),
            body: `client_id=${params.client_id}&client_secret=${params.client_secret}&grant_type=${params.grant_type}`
        });

        return fetch(request)
            .then(response => {
                return response.json()
            })
            .then(json => {
                return json
            })
    }

    getRestaurants = (json) => {

        var authorization = json.token_type + " " + json.access_token

        const request = new Request('https://api.yelp.com/v3/businesses/search?latitude=37.786882&longitude=-122.399972', {
            method: 'GET',
            headers: new Headers({
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': authorization
            })
        });

        fetch(request)
            .then(response => {
                return response.json()
            })
            .then(json => {

                if (this.state.distanceFilter > 0) {
                    // console.log(json.businesses)
                    // console.log(json)
                    // // let businesses = []
                    // // businesses = json.businesses
                    let dataFiltered = json.businesses.filter(restaurant =>
                    Number(restaurant.distance) <= (Number(this.state.distanceFilter) * 1000))
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(dataFiltered),
                        rawData: dataFiltered,
                        animating: false
                    })
                } else {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(json.businesses),
                        rawData: json.businesses,
                        animating: false
                    })}
                return json
            })
    }

    setSearchText = (event) => {
        let searchText = event.nativeEvent.text
        let filteredRes = this.state.rawData.filter(restaurant =>
        ~restaurant.name.toLowerCase().indexOf(searchText.toLowerCase()))

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(filteredRes),
            searchText: searchText
        });
    }

    onFilterClick = (navigator) => {
        navigator.push({
            title: "Setting",
            component: Setting
        })

    }

    render() {
        const {navigator} = this.props
        return (
            <View style={{flexDirection: "column", flex: 1}}>

                <StatusBar
                    hidden={false}
                    barStyle="light-content" />

                <ActivityIndicator
                    animating={this.state.animating}
                    color='#000000'
                    style={styles.loadingIndicator}
                    size="large" />

                <SearchBar searchText={this.state.searchText}
                           onChange={this.setSearchText}
                           onFilterClick={() => this.onFilterClick(navigator)}/>

                <ListView
                    style={styles.listView}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <RestaurantItem imageUrl={rowData.image_url}
                                                            name={rowData.name}
                                                            distance={rowData.distance}
                                                            review={rowData.review_count}
                                                            address={rowData.location.address1}
                                                            city={rowData.location.city}/>}
                    renderSeparator={this.renderSeparator}
                />
            </View>
        );
    }

    renderSeparator(sectionID, rowID) {
        return (
            <View
                key={`${sectionID}-${rowID}`}
                style={{
                    height: .5,
                    backgroundColor: 'gray',
                    marginLeft: 10
                }}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataFilter : state.searchReducer.params
    }
}

export default connect(mapStateToProps)(Home);