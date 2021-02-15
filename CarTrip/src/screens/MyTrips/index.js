import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SafeAreaView, FlatList, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import components
import styles from './styles';
import { Color, Constants } from "../../common/styles";
import { TextComponent, TripItemComponent, NoResultComponent } from '../../components';
import { dummyUpcomingData } from '../../common/helper/common';

class MyTrips extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.WHITE }}>
                <FlatList
                    style={{ width: '100%' }}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('2%') }}
                    data={dummyUpcomingData()}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TripItemComponent
                            onClick={() => { this.props.navigation.navigate("TripDetail", { tripDetail: item }) }}
                            item={item}
                            index={index} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    ListEmptyComponent={<NoResultComponent text='No any upcoming donation found' />}
                />
            </SafeAreaView>
        )
    }
}

//---- Connect to props functions and values -----//
function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTrips)
