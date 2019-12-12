import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  row: {
    padding: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
  authorName: {
    fontSize: 12,
    lineHeight: 18,
    color: 'grey',
    fontWeight: '600',
  },
  authorEmail: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '600',
  },
});

export default styles;
