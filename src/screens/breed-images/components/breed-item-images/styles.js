import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        paddingVertical: (metrics.baseMargin/2),
        paddingHorizontal: (metrics.baseMargin/2),
        borderBottomWidth: 1,
        borderBottomColor: colors.darkTransparent,
    },
    image: {
        height: 150,
        resizeMode: 'contain',
    },
});

export default styles;