import { FlatList, View, StyleSheet, Image } from 'react-native';
import Text from './Text';
const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    item: {
        backgroundColor: '#1111',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },


    languageBox: {

        padding: 5,
        paddingRight: 7,
        backgroundColor: '#0366d6',
        borderRadius: 5,
    },


    tinyLogo: {
        width: 50,
        height: 50,
    },

    flexContainerA: {
        display: 'flex',
        flexDirection: 'column',
        //   justifyContent: 'space-evenly'

    },

    flexContainerB: {
        display: 'flex',
        flexDirection: 'row',
        //   justifyContent: 'flex-start',
        //   alignItems: 'flex-start'
        //    
    },
    flexContainerC: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },

    flexItemA: {
        display: 'flex',
        margin: 10,

    },

    flexItemB: {
        display: 'flex',
        alignItems: 'flex-start',
        flexShrink: 1,
        margin: 10
    },
});


const RepositoryItem = ({ fullName, description,
    language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {
    const roundKilo = (number) => {
        if (number > 1000) {
            let a = number / 100
            a = Math.round(a)
            if (a % 10 === 0) {
                a = a.toFixed(0)
            }
            else {
                a = a.toFixed(1)
            }
            a = a / 10
            return a + 'K'
        }
        else return number + 'K'
    }
    const forksCountRound = roundKilo(forksCount)
    const stargazersCountRound = roundKilo(stargazersCount)
    const reviewCountRound = roundKilo(reviewCount)

    return (

        <View  testID="repositoryItem" style={styles.flexContainerA}>
            <View style={styles.flexContainerB}>
                <View style={styles.flexItemA} >
                    <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
                </View>
                <View style={styles.flexItemB}>
                    <Text fontWeight='bold'  >{fullName}</Text>
                    <Text color='textDiscription'  >{description}</Text>
                    <View style={styles.languageBox}>
                        <Text color='textSecondary'  > {language}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.flexContainerC}>

                <View style={styles.flexItemA}>
                    <Text fontWeight='bold' > {forksCountRound}</Text>
                    <Text> Forks </Text>
                </View>
                <View style={styles.flexItemA}>
                    <Text fontWeight='bold'  > {stargazersCountRound}</Text>
                    <Text> Stars </Text>
                </View>
                <View style={styles.flexItemA}>
                    <Text fontWeight='bold'> {ratingAverage}</Text>
                    <Text > Rating </Text>
                </View>
                <View style={styles.flexItemA}>
                    <Text fontWeight='bold'> {reviewCountRound}</Text>
                    <Text >Review </Text>
                </View>

            </View>

        </View>
    )
};

export default RepositoryItem;