/**
 * Created by AnTran on 3/26/17.
 */
import React, { Component } from 'react';
import {
    Text, StatusBar, View, Switch, LayoutAnimation, TouchableOpacity, ScrollView
} from 'react-native';

import {connect} from 'react-redux';
import {actionCreators} from "../../reducers/reducer";

import styles from './styles';
import FilterBar from '../../components/filterbar/FilterBar'
import images from '../../config/images'
import DropDownItem from '../../components/dropdownitem/DropDownItem'
import Home from '../home/Home';


var DISTANCES = [0.3, 1, 3, 5, 20]

class Setting extends Component {

    constructor(props) {
        super(props)

        this.onCancelClick = this.onCancelClick.bind(this)
        this.onSearchClick = this.onSearchClick.bind(this)
        this.onOpenDistance = this.onOpenDistance.bind(this)
        this.onChooseDistance = this.onChooseDistance.bind(this)
        this.onOpenSort = this.onOpenSort.bind(this)
        this.onChooseCategory = this.onChooseCategory.bind(this)
        this.onExpandCategories = this.onExpandCategories.bind(this)
        this.onCollapseCategories = this.onCollapseCategories.bind(this)

        this.state = {
            falseSwitchIsOn: false,
            distanceState: 0,
            distanceValue: (this.props.dataFilter) ? this.props.dataFilter.distanceFilter : 0,
            categories: [],
            categoriesShowed: 5,
            categoriesChosen: [],
        };
    }

    componentDidMount() {
        this.getCategories()
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    getCategories() {
        fetch('https://www.yelp.com/developers/documentation/v3/all_category_list/categories.json')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                this.setState({
                    categories: json
                })
            })

    }

    onCancelClick = (navigator) => {
        navigator.pop()
    }

    onSearchClick = (navigator, dispatch) => {
        dispatch(actionCreators.storeDistance({distanceFilter: this.state.distanceValue}));
        navigator.replacePrevious({
            title: "Home",
            component: Home
        })
        navigator.pop()
    }

    onOpenDistance = () => {
        this.setState({
            distanceState: 1
        })
    }

    onChooseDistance = (value) => {
        this.setState({
            distanceState: 0,
            distanceValue: value
        })
    }

    onOpenSort = () => {
        console.log("Sort Click")
    }

    onChooseCategory = (valueItem) => {
        // this.setState({
        //     categoriesChosen: this.state.categoriesChosen.push(valueItem)
        // })
    }

    onExpandCategories =() => {
        this.setState({
            categoriesShowed: this.state.categories.length
        })
    }

    onCollapseCategories =() => {
        this.setState({
            categoriesShowed: 5
        })
    }


    render() {
        const {navigator, dispatch} = this.props

        // if (this.props.dataFilter) {
        //     this.state.distanceValue = this.props.dataFilter.distanceFilter
        // }
        // Generate distance choice
        let distanceHiding = (<DropDownItem value={this.state.distanceValue}
                                            icon={images.arrowDropDown}
                                            onChoose={() => this.onOpenDistance()}/>)

        //Generate distance list
        var distanceContents = []
        for (var i = 0; i < DISTANCES.length; i ++) {
            var itemIcon = ''
            if (DISTANCES[i] == this.state.distanceValue) {
                itemIcon = images.checkMark
            }
            distanceContents.push(<DropDownItem value={DISTANCES[i]}
                                                key={i}
                                                icon={itemIcon}
                                                onChoose={(valueItem) => this.onChooseDistance(valueItem)}/>)
        }

        let distanceShowing = (<View>{distanceContents}</View>)

        // Generate distance content
        var distanceContent = this.state.distanceState == 0 ? distanceHiding : distanceShowing

        // Generate categories content
        var categoriesContent = []
        if (this.state.categories.length > 0) {
            for (var i = 0; i < this.state.categoriesShowed; i++) {
                // var chosenIcon = ""
                // for (var j = 0; j < this.state.categoriesChosen.length; j++) {
                //     if (this.state.categories[i].title == this.state.categoriesChosen[j]) {
                //         chosenIcon = images.checkMark
                //     }
                // }
                categoriesContent.push(<DropDownItem value={this.state.categories[i].title}
                                                    key={i}
                                                    icon={images.checkMark}
                                                    onChoose={(valueItem) => this.onChooseCategory(valueItem)}/>)
            }
            if (this.state.categoriesShowed < this.state.categories.length) {
                categoriesContent.push(<TouchableOpacity style={styles.categoryBox}
                                                         onPress={() => this.onExpandCategories()}
                                                         key={this.state.categoriesShowed}>
                                            <Text style={styles.textSeeAll}>See All</Text>
                                        </TouchableOpacity>)
            } else {
                categoriesContent.push(<TouchableOpacity style={styles.categoryBox}
                                                         onPress={() => this.onCollapseCategories()}
                                                         key={this.state.categoriesShowed}>
                                            <Text style={styles.textSeeAll}>Show less</Text>
                                        </TouchableOpacity>)
            }
        }


        return (
            <ScrollView style={styles.container}>

                <StatusBar
                    hidden={false}
                    barStyle="light-content" />

                <FilterBar onCancelClick={() => this.onCancelClick(navigator)}
                           onSearchClick={() => this.onSearchClick(navigator, dispatch)}/>

                <View style={styles.body}>
                    <View style={styles.switchBox}>
                        <Text style={styles.switchLabel}>Offering a Deal</Text>
                        <Switch
                            onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                            value={this.state.falseSwitchIsOn} />
                    </View>

                    <View>
                        <Text style={styles.commonBox}>Distance</Text>
                        <View style={styles.commonBox}>
                            {distanceContent}
                        </View>
                    </View>

                    <View>
                        <Text style={styles.commonBox}>Sort By</Text>
                        <View style={styles.commonBox}>
                            <DropDownItem value="Best Match"
                                          icon={images.arrowDropDown}
                                          onChoose={() => this.onOpenSort()}/>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.commonBox}>Category</Text>
                        <View style={styles.commonBox}>
                            {categoriesContent}
                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataFilter : state.searchReducer.params
    }
}

export default connect(mapStateToProps)(Setting);