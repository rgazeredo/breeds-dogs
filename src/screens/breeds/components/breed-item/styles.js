import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        paddingVertical: (metrics.baseMargin/2),
        paddingHorizontal: (metrics.baseMargin/2),
        borderBottomWidth: 1,
        borderBottomColor: colors.darkTransparent,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default styles;