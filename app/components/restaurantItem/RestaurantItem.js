/**
 * Created by AnTran on 3/25/17.
 */
import React, { Component } from 'react';
import {
    View, Image, Text
} from 'react-native';

import styles from './styles'

const RestaurantItem = (props) => {

    const {imageUrl, name, distance, review, address, city} = props

    var distanceMil = distance/1000
    distanceMil = distanceMil.toFixed(1).toString()
    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl}}
                   style={styles.image}/>
            <View style={styles.detailContainer}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.textName} numberOfLines={1}>{name}</Text>
                    <Text style={[styles.textDetail, {textAlign: "right"}]} numberOfLines={1}>{distanceMil}mil</Text>
                </View>
                <Image source={{uri: "https://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_design_web/41341496d9db/assets/img/stars/stars.png"}}
                       style={styles.imageRating}
                       height={303}
                       width={84}/>
                <Text style={[styles.textDetail, {marginTop: 5, marginBottom: 5}]} numberOfLines={1}>{review} Reviews</Text>
                <Text style={styles.textAddress} numberOfLines={1}>{address}</Text>
                <Text style={styles.textDetail} numberOfLines={1}>{city}</Text>
            </View>
        </View>
    );

    RestaurantItem.propTypes = {
        imageUrl: React.PropTypes.string,
        name: React.PropTypes.string,
        distance: React.PropTypes.number,
        review: React.PropTypes.string,
        address: React.PropTypes.string,
        city: React.PropTypes.string
    }

    RestaurantItem.defaultProps = {
        imageUrl: '',
        name: '',
        distance: 0,
        review: '',
        address: '',
        city: ''
    };
}

export default RestaurantItem