import React, {Component} from 'react';

/*Components*/
import {
    SwipeableFlatList,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ripple from 'src/components/Ripple'

/*Data*/
import userData from 'src/assets/DummyData'

/*Utils*/
import {relativeWidth, FontSize} from 'src/utils'
import styles from './styles'

export default class Home extends Component {

    /*Lifecycle Methods*/
    constructor(props) {
        super(props);
        this.state = {
            userData: userData
        };
    }

    /*UI Methods*/
    showAlert = (index, item) => {
        this.swipeableList._onClose();
        Alert.alert(
            'Delete User',
            `Are you sure you want to delete ${item.fullName}?`,
            [
                {
                    text: 'No',
                    onPress: () => {
                    }
                },
                {
                    text: 'Yes',
                    onPress: () => {

                        if (this.state.userData[index].id === item.id) {
                            let userData = this.state.userData;
                            userData.splice(index, 1);
                            this.setState({userData: userData})

                        } else {
                            this.swipeableList._onClose()
                        }
                    },
                    style: 'cancel',
                },
            ],
            {cancelable: false},
        );
    };

    renderHeader = () => {
        return (
            <View style={styles.headerStyle}>
                <Text style={styles.headerTextStyle}>
                    Swipeable FlatList
                </Text>
            </View>
        )
    };

    renderQuickActionButton = (index, item) => {
        return (
            <View style={styles.quickActionContainer}>
                <Ripple
                    onPress={() => {
                        this.showAlert(index, item);
                    }} style={styles.quickActionButtonStyle}>
                    <Icon name={'delete'} color={'white'} size={25}/>
                    <Text
                        style={styles.quickActionButtonTextStyle}>
                        Delete
                    </Text>
                </Ripple>
            </View>
        )
    };

    renderListItem = (index, item) => {
        return (
            <View style={styles.cardContainer}>
                <Image style={styles.profileImage}
                       source={{uri: item.image}}/>

                <View style={styles.primaryTextStyle}>
                    <Text style={{fontSize: FontSize.fontLarge, color: 'black'}}>
                        {item.fullName}
                    </Text>
                    <Text style={styles.secondaryTextStyle}>
                        {item.email}
                    </Text>
                    <Text style={styles.secondaryTextStyle}>
                        {item.number}
                    </Text>
                </View>
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}

                <SwipeableFlatList
                    ref={(ref) => {
                        this.swipeableList = ref
                    }}
                    data={this.state.userData}
                    keyExtractor={(item, index) => index.toString()}
                    maxSwipeDistance={relativeWidth(25)}
                    bounceFirstRowOnMount={true}
                    renderQuickActions={({index, item}) => this.renderQuickActionButton(index, item)}
                    renderItem={({index, item}) => this.renderListItem(index, item)}/>
            </View>
        );
    }
}
