import { View, Text, Image, ScrollView, state, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/styles'

export default function NewFeed() {
    const dataAvatar = [
        {
            name: 'Sahara',
            image: require('../../assets/images/image1.jpeg'),
        },
        {
            name: 'Sophia',
            image: require('../../assets/images/image2.jpeg'),
        },
        {
            name: 'Hana',
            image: require('../../assets/images/image3.jpeg'),
        },
        {
            name: 'Naul',
            image: require('../../assets/images/image4.jpeg'),
        },
        {
            name: 'Kimihana',
            image: require('../../assets/images/image5.jpeg'),
        },
        {
            name: 'Yoko',
            image: require('../../assets/images/image6.jpeg'),
        },
        {
            name: 'Su',
            image: require('../../assets/images/image7.jpeg'),
        },
        {
            name: 'Finnia',
            image: require('../../assets/images/image8.jpeg'),
        },
        {
            name: 'Subana',
            image: require('../../assets/images/image9.jpeg'),
        },
        {
            name: 'Corohe',
            image: require('../../assets/images/image10.jpeg'),
        }
    ]

    const dataFeeds = [
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sahara",
            image: require('../../assets/images/image1.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sophia",
            image: require('../../assets/images/image2.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "3 minutes"

        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Hana",
            image: require('../../assets/images/image3.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "5 minutes"

        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Naul",
            image: require('../../assets/images/image4.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "10 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Kimihana",
            image: require('../../assets/images/image5.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../../assets/images/camera.png')} />
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>Feed</Text>
                <Image style={styles.icon} source={require('../../assets/images/pen.png')} />
            </View>

            <View style={{ height: 120 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {dataAvatar.map((data, index) => {
                        return <View style={styles.sc_avatar}>
                            <Image style={styles.avatar} source={data.image} />
                            <Text style={styles.sc_avatar_text}>{data.name}</Text>
                        </View>
                    })}
                </ScrollView>
            </View>



            <ScrollView>
                {dataFeeds.map((data, index) => {
                    return <View style={styles.ContentContainer}>
                        <View style={styles.ContentContainer_image}>
                            <Image style={styles.avatar} source={data.image} />
                            <View style={styles.ContentContainer_text}>
                                <Text style={styles.ContentContainer_text_title}>{data.title}</Text>
                                <View style={styles.ContentContainer_text_area}>
                                    <Text>{data.name}</Text>
                                    <Text>{data.time}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.subContainer}>{data.content}</Text>
                        <View style={styles.commentContainer}>
                            <TouchableOpacity>
                                <Image style={styles.commentContainer_img} source={require('../../assets/images/heart.png')} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontWeight: '400' }}>2</Text>
                            <Image style={styles.commentContainer_img} source={require('../../assets/images/comment.png')} />
                            <Text style={{ color: 'black', fontWeight: '400' }} >4</Text>
                        </View>
                    </View>
                })}
            </ScrollView>
        </View>
    )
}