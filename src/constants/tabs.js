import { makeStyles } from '@material-ui/core/styles';
import colors from './colors';

// h stands for horizontal and v stands for vertical
const TabStyles = makeStyles((theme) => ({
  tabs: {
    width: '100%',
    display: 'flex',
    borderBottom: '1px solid gray',
    textTransform: 'capitalize',
    justifyContent: 'space-between'
  },
  tab: {
    maxWidth: 'fit-content',
    font: 'normal 14px AvenirNext-DemiBold',
    color: colors.black2,
    textTransform: 'capitalize',
  },
  activeTab: {
    font: 'normal bold 14px/18px AvenirNext-DemiBold',
    letterSpacing: 0,
    color: colors.darkBlue,
    paddingBottom: 0,
    textTransform: 'capitalize',
  },
  activeIndicator: {
    borderBottom: `1px solid ${colors.darkBlue}`
  },
}));
export default TabStyles;