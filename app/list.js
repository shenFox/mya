// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Dimensions,
//   FlatList,
//   View
// } from 'react-native';
// const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';
 
// let width=Dimensions.get('window').width;
// let height=Dimensions.get('window').height;



// class FlatListDemo extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			dataArray:[],
// 			isLoading:true,
// 		};
// 	}
	
// 	componentDidMount() {
// 		console.log(1)
//     fetch(REQUEST_URL)
//         .then((response) => response.json())
//         .then((responseData) => {
//             let data = responseData.items;
//             let i = 0;
//             let dataBlob = [];
//             data.map(function (item) {
//                 dataBlob.push({
//                     key: i,
//                     value: item,
//                 })
//                 i++;
//             });
//             this.setState = {
// 							dataArray :[{a:1,b:2}],
// 							isLoading:false,
//             }
//             dataBlob = null;
//             data = null;
//         })
//         .done();
// 	}

	

// 	render() {
// 		return(
// 			<FlatList
// 			  data={this.state.dataArray}
// 			  renderItem={({item}) => <Text>{item.key}</Text>}
// 			  initialNumToRender={4}
// 			/>
// 		)
// 	}
// }



// class MyListItem extends React.PureComponent {
//   _onPress = () => {
//     this.props.onPressItem(this.props.id);
//   };

//   render() {
//     return (
//       <SomeOtherWidget
//         {...this.props}
//         onPress={this._onPress}
//       />
//     )
//   }
// }

// class MyList extends React.PureComponent {
//   state = {selected: (new Map(): Map<string, boolean>)};

//   _keyExtractor = (item, index) => item.id;

//   _onPressItem = (id: string) => {
//     // updater functions are preferred for transactional updates
//     this.setState((state) => {
//       // copy the map rather than modifying state.
//       const selected = new Map(state.selected);
//       selected.set(id, !selected.get(id)); // toggle
//       return {selected};
//     });
//   };

//   _renderItem = ({item}) => (
//     <MyListItem
//       id={item.id}
//       onPressItem={this._onPressItem}
//       selected={!!this.state.selected.get(item.id)}
//       title={item.title}
//     />
//   );

//   render() {
//     return (
//       <FlatList
//         data={this.props.data}
//         extraData={this.state}
//         keyExtractor={this._keyExtractor}
//         renderItem={this._renderItem}
//       />
//     );
//   }
// }



// export default MyList


/**
 * Created by JokAr on 2017/4/12.
 */
// 'use strict';
// import React, {Component} from "react";
// import {ActivityIndicator,Dimensions, Animated, FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
// let width=Dimensions.get('window').width;
// let height=Dimensions.get('window').height;
// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';

// class List extends Component {
//     static navigationOptions = {
//         title: 'FlatListExample',
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             //网络请求状态
//             error: false,
//             errorInfo: "",
//             dataArray: [],
//         }
//     }

//     //网络请求
//     fetchData() {
//         //这个是js的访问网络的方法
//         fetch(REQUEST_URL)
//             .then((response) => response.json())
//             .then((responseData) => {
//                 let data = responseData.items;
//                 let dataBlob = [];
//                 let i = 0;
//                 data.map(function (item) {
//                     dataBlob.push({
//                         key: i,
//                         value: item,
//                     })
//                     i++;
//                 });
//                 this.setState({
//                     //复制数据源
//                     dataArray: dataBlob,
//                     isLoading: false,
//                 });
//                 data = null;
//                 dataBlob = null;
//             })
//             .catch((error) => {
//                 this.setState({
//                     error: true,
//                     errorInfo: error
//                 })
//             })
//             .done();
//     }

//     componentDidMount() {
//         //请求数据
//         this.fetchData();
//     }

//     //加载等待的view
//     renderLoadingView() {
//         return (
//             <View style={styles.container}>
//                 <ActivityIndicator
//                     animating={true}
//                     style={[styles.gray, {height: 80}]}
//                     color='red'
//                     size="large"
//                 />
//             </View>
//         );
//     }

//     //加载失败view
//     renderErrorView(error) {
//         return (
//             <View style={styles.container}>
//                 <Text>
//                     Fail: {error}
//                 </Text>
//             </View>
//         );
//     }

//     //返回itemView
//     renderItemView({item}) {
//         return (
//             <View style={{backgroundColor:'skyblue',height:100}}>
//                 <Text style={styles.title,{color:'red'}}>name: {item.value.name} ({item.value.stargazers_count}
//                     stars)</Text>
//                 <Text style={styles.content}>description: {item.value.description}</Text>
//             </View>
//         );
//     }

//     renderData() {
//         return (
//             <ScrollView style={{backgroundColor:'red',height:height*0.5}}>
//                 <Text >
//                     热门
//                 </Text>
//                 <AnimatedFlatList
//                 		// getItemLayout={(data, index) => ( {length: 100, offset: 100 * index, index} )}
//                 		initialNumToRender={4}
//                 		ItemSeparatorComponent={()=><View style={{height:10}} />}
//                     data={this.state.dataArray}
//                     renderItem={this.renderItemView}
//                     onRefresh={}
//                     refreshing={true}
//                 />
//             </ScrollView>
//         );
//     }

//     render() {
//         //第一次加载等待的view
//         if (this.state.isLoading && !this.state.error) {
//             return this.renderLoadingView();
//         } else if (this.state.error) {
//             //请求失败view
//             return this.renderErrorView(this.state.errorInfo);
//         }
//         //加载数据
//         return this.renderData();
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // height:400,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     title: {
//         fontSize: 15,
//         color: 'blue',
//     },
//     content: {
//         fontSize: 15,
//         color: 'black',
//     }

// });


// import React, { Component } from "react";
// import { View, Text, FlatList, ActivityIndicator } from "react-native";
// import { List, ListItem, SearchBar } from "react-native-elements";

// class FlatListDemo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       data: [],
//       page: 1,
//       seed: 1,
//       error: null,
//       refreshing: false
//     };
//   }

//   componentDidMount() {
//     this.makeRemoteRequest();
//   }

//   makeRemoteRequest = () => {
//     const { page, seed } = this.state;
//     const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
//     this.setState({ loading: true });

//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data: page === 1 ? res.results : [...this.state.data, ...res.results],
//           error: res.error || null,
//           loading: false,
//           refreshing: false
//         });
//       })
//       .catch(error => {
//         this.setState({ error, loading: false });
//       });
//   };

//   handleRefresh = () => {
//     this.setState(
//       {
//         page: 1,
//         seed: this.state.seed + 1,
//         refreshing: true
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   handleLoadMore = () => {
//     this.setState(
//       {
//         page: this.state.page + 1
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "86%",
//           backgroundColor: "#CED0CE",
//           marginLeft: "14%"
//         }}
//       />
//     );
//   };

//   renderHeader = () => {
//     return <SearchBar placeholder="Type Here..." lightTheme round />;
//   };

//   renderFooter = () => {
//     if (!this.state.loading) return null;

//     return (
//       <View
//         style={{
//           paddingVertical: 20,
//           borderTopWidth: 1,
//           borderColor: "#CED0CE"
//         }}
//       >
//         <ActivityIndicator animating size="large" />
//       </View>
//     );
//   };

//   render() {
//     return (
//       <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => (
//             <ListItem
//               roundAvatar
//               title={`${item.name.first} ${item.name.last}`}
//               subtitle={item.email}
//               avatar={{ uri: item.picture.thumbnail }}
//               containerStyle={{ borderBottomWidth: 0 }}
//             />
//           )}
//           keyExtractor={item => item.email}
//           ItemSeparatorComponent={this.renderSeparator}
//           ListHeaderComponent={this.renderHeader}
//           ListFooterComponent={this.renderFooter}
//           onRefresh={this.handleRefresh}
//           refreshing={this.state.refreshing}
//           onEndReached={this.handleLoadMore}
//           onEndReachedThreshold={50}
//         />
//       </List>
//     );
//   }
// }

// export default FlatListDemo;

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    ListView
} = ReactNative;

var TimerMixin = require('react-timer-mixin');
var RefreshInfiniteListView = require('@remobile/react-native-refresh-infinite-listview');

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var FlatListDemo = React.createClass({
    mixins: [TimerMixin],
    data: {index: 0, maxIndex:20, list:[]},
    getData(init) {
        var total = 5;
        console.log(1)
        if (init) {
            this.data.index = 0;
            this.data.list = [];
            total = 5;
            // total = Math.floor(Math.random()*5);
        }
        for (var i=0; i<total; i++) {
            this.data.list[this.data.index] = "Row" + (this.data.index+1);
            this.data.index++;
        }
    },
    getInitialState() {
        this.getData(true);
        return {
            dataSource: ds.cloneWithRows(this.data.list)
        }
    },
    onRefresh() {
        this.getData(true);
        this.setTimeout(()=>{
            this.list.hideHeader();
            this.setState({dataSource: ds.cloneWithRows(this.data.list)});
        }, 1000);
    },
    onInfinite() {
        this.getData();
        this.setTimeout(()=>{
            this.list.hideFooter();
            this.setState({dataSource: ds.cloneWithRows(this.data.list)});
        }, 1000);
    },
    loadedAllData() {
        return this.data.index >= this.data.maxIndex||this.data.index===0;
    },
    renderRow(text) {
        return (
            <View style={styles.row}>
                <Text >
                    {text}
                </Text>
            </View>
        )
    },
    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID+rowID}/>
        );
    },
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:20}} />
                <RefreshInfiniteListView
                    ref = {(list) => {this.list= list}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    loadedAllData={this.loadedAllData}
                    initialListSize={30}
                    scrollEventThrottle={10}
                    style={{backgroundColor:'transparent'/*,top:100, left:10, width:200, height:300, position:'absolute'*/}}
                    onRefresh = {this.onRefresh}
                    onInfinite = {this.onInfinite}
                    >
                </RefreshInfiniteListView>
            </View>
        )
    }
});

var styles = StyleSheet.create({
    row: {
        height:60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        alignSelf:'stretch'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
});

module.exports = FlatListDemo;


