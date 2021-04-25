
 import React from 'react';
 import {
	Animated,
	Image,
	StatusBar,
	Text,
	View,
} from 'react-native';

import { User } from "../models";
import faker from 'faker'
faker.seed(100)


const SPACING = 20
const AVATAR_SIZE = 70
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

 const ListUser = ({users}:{users:User[]}) => {
	const scrollY = React.useRef( new Animated.Value(0)).current

	return (
        <Animated.FlatList
            data={users}
            keyExtractor={user=>user.getName()}
            contentContainerStyle={{
                padding: SPACING,
                paddingTop: StatusBar.currentHeight || 42,
            }}
            onScroll={Animated.event(
                [{ nativeEvent: {contentOffset:{y: scrollY}}}],
                { useNativeDriver: true}
            )}
            renderItem={({item, index})=>{

                const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 5),
                ]

                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1,1,1,0]
                })

                return (
                    <Animated.View
                        style={{
                            flexDirection:"row",
                            padding: SPACING,
                            marginBottom: SPACING,
                            backgroundColor: "#ffa",
                            borderRadius: 12,
                            shadowColor: "#333",
                            shadowOffset: {
                                width: 5,
                                height: 10,
                            },
                            shadowOpacity: 1,
                            shadowRadius: 20,
                            transform:[{scaleX:scale}]
                        }}
                    >
                        <Image
                            source={{uri: faker.image.avatar()}}
                            style={{
                                width: AVATAR_SIZE,
                                height: AVATAR_SIZE,
                                borderRadius: AVATAR_SIZE,
                                marginRight: SPACING / 2,
                            }}
                        />
                        <View>
                            <Text style={{fontSize: 22, fontWeight:'700'}}>{item.getName()}</Text>
                            <Text style={{fontSize: 18, opacity: .7}}>{item.getEmail()}</Text>
                            <Text style={{fontSize: 14, opacity: .8, color:"#0099cc"}}>{item.getWebsite()}</Text>
                        </View>
                    </Animated.View>
                )
            }}
        />
	)
 }

 export default ListUser;
