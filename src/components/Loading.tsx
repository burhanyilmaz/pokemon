import { ActivityIndicator } from 'react-native';
import { colors } from 'theme/colors';

const Loading = () => <ActivityIndicator size="small" testID="loading" color={colors.primary} />;

export default Loading;
